import React from "react";
import { Link } from "react-router-dom";
import { ProfileInt } from "../Types/interfaces";

export default function Profile(props: { user: ProfileInt }) {
  const { id, name, lastName, imageUrl, prefix, title } = props.user;
  return (
    <div className="profile-box" key={id + name + lastName}>
      <img src={imageUrl + "?v=" + id} alt="User Profile image" />
      <div>
        <h3>
          {prefix} {name} {lastName}
        </h3>
        <p>{title}</p>
        <Link to={`/profile/${id}`}>Visit Profile</Link>
      </div>
    </div>
  );
}
