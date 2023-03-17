import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Profile from "../Components/Profile";
import useScrollhandler from "../Hooks/useScrollHandler";
import { ProfileInt, FullProfileInt } from "../Types/interfaces";
import axios from "axios";
import useFriendsScrollHandler from "../Hooks/useFriendsScrollHandler";
import FullProfile from "../Components/FullProfile";
export default function SingleProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<null | FullProfileInt>(null);
  const [friends, setFriends] = useState<[] | ProfileInt[]>([]);
  const [page, setPage] = useState(1);
  // Renders new friends list while scrolling
  useFriendsScrollHandler({ array: friends, setArray: setFriends, page, setPage, id });
  // get profile information
  useEffect(() => {
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);
  // if we change to another profile, scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  // If user isn't null, we can load it's information
  if (user === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <FullProfile user={user} />
        <div className="profiles-container">
          <h1 style={{ width: "100%", textAlign: "center" }}>Friends</h1>
          {friends === null
            ? "Loading..."
            : friends.map((user, index) => {
                return <Profile user={user} key={index} />;
              })}
        </div>
      </div>
    );
  }
}
