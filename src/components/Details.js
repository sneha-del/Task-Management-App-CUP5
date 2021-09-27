import React from "react";

const Details = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="details-page">
        <h1>Hey this is Details page of USER</h1>

        <ul>
          <li className="li"> Your Email: {user.email}</li>
        </ul>
      </div>
    </>
  );
};

export default Details;
