import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
export default function Home() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState(null);
  const [current, setCurrent] = useState();
  const pageSize = useRef(100);

  useEffect(() => {
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${pageSize.current}`).then((res) => {
      setUsers(res.data.list);
    });
  }, [page]);
  return (
    <div className="pageWrapper">
      <div className="profiles-container">
        {users === null ? (
          <h1>Loading...</h1>
        ) : (
          users.map((user, index) => {
            return <Profile user={user} key={index}/>;
          })
        )}
      </div>
    </div>
  );
}
