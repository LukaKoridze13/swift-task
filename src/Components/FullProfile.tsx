import React from "react";
import { Link } from "react-router-dom";
import { FullProfileInt } from "../Types/interfaces";

export default function FullProfile(props: {user: FullProfileInt}) {
    const {id, imageUrl, prefix, name, lastName, title, email, ip, jobArea, jobDescriptor, jobType, address, company} = props.user
  return (
    <div className="full-profile">
      <img width={"100px"} src={imageUrl + "?v=" + id} alt="" />
      <h3>
        {prefix} {name} {lastName}
      </h3>
      <p>{title}</p>
      <Link to={`/`}>Go back</Link>

      <div className="box" style={{ marginTop: "30px" }}>
        Email: {email || "N/A"} <br />
        Ip Address: {ip} <br />
        Job Area: {jobArea || "N/A"} <br />
        Job Type: {jobType || "N/A"} <br />
        -------Address--------- <br />
        Company: <strong>{company.name + company.suffix || "N/A"} </strong> <br />
        City: {address.city || "N/A"} <br />
        Country: {address.country || "N/A"} <br />
        State: {address.state || "N/A"} <br />
        Street: {address.streetAddress || "N/A"} <br />
        ZIP: {address.zipCode || "N/A"} <br />
      </div>
    </div>
  );
}
