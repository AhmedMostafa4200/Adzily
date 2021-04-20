import React, { Fragment } from "react";

const Receipt = (props) => {
  return (
    <Fragment>
      <div className="container my-5 text-white text-center">
        <h5>Thanks: {props.user.userName}</h5>
        <ul className="px-0 my-3 custom-list">
          <span className="text-primary">Selected Songs</span>
          {props.songs.map((song) => {
            return song.selected && <li>{song.name}</li>;
          })}
        </ul>
        <h6>Total Price: {props.songsPrice} EGP</h6>
      </div>
    </Fragment>
  );
};

export default Receipt;
