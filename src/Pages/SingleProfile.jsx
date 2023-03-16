import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Profile from "./Profile";
export default function SingleProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState(null);
  const [page, setPage] = useState(1);
  const size = 100;
  useEffect(() => {
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);
  useEffect(() => {
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/${size}`).then((res) => {
      setFriends(res.data.list);
    });
  }, [page,id]);

  if (user === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className="full-profile">
          <img width={"100px"} src={user.imageUrl + "?v=" + user.id} alt="" />
          <h3>
            {user.prefix} {user.name} {user.lastName}
          </h3>
          <p>{user.title}</p>
          <Link to={`/`}>Go back</Link>

          <div className="box" style={{ marginTop: "30px" }}>
            Email: {user.email || "N/A"} <br />
            Ip Address: {user.ip} <br />
            Job Area: {user.jobArea || "N/A"} <br />
            Job Type: {user.jobType || "N/A"} <br />
            -------Address--------- <br />
            Company: <strong>{user.company.name + user.company.suffix || "N/A"} </strong> <br />
            City: {user.address.city || "N/A"} <br />
            Country: {user.address.country || "N/A"} <br />
            State: {user.address.state || "N/A"} <br />
            Street: {user.address.streetAddress || "N/A"} <br />
            ZIP: {user.address.zipCode || "N/A"} <br />
          </div>
        </div>
        <div className="profiles-container">
          <h1 style={{width:'100%', textAlign:'center'}}>Friends</h1>
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
