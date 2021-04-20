import React, { Fragment } from "react";

import { withRouter, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Singers = (props) => {
  //
  const handleSelection = (singer, e) => {
    props.handleSingersStateChange({
      singer,
      checked: e.target.checked,
    });
  };
  return (
    <Fragment>
      <div className="container custom-container-height">
        <div className="row">
          <h3 className="col-12 mb-2 text-secondary text-center">
            Select Singers
          </h3>

          <div className="row mx-auto col-lg-9 col-12">
            {props.singers.map((singer) => {
              return (
                <div
                  key={singer._id}
                  className="col-lg-4 col-6 text-white text-center py-2"
                >
                  <input
                    type="checkbox"
                    className="col"
                    id={singer._id}
                    name={singer.name}
                    onChange={(e) => handleSelection(singer, e)}
                    value={singer.selected}
                    defaultChecked={singer.selected}
                  />
                  <label htmlFor={singer._id} className="user-select-none">
                    {singer.name}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="custom-height row mx-auto col-lg-3 col-12 py-2 mt-3 my-lg-0">
            <div className="col-lg-12 col-6 text-white text-center text-info">
              Count: {props.singersCount}
            </div>
            <div className="col-lg-12 col-6 text-white text-center text-info">
              Price: {props.singersPrice}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-around mx-auto col-12">
          <Link
            to="/"
            onClick={(e) => e.preventDefault()}
            className="col-lg-3 col-6 text-center"
          >
            <svg
              className="align-bottom"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{
                enableBackground: "new 0 0 512 512",
                transform: "rotate(180deg)",
                width: "25px",
              }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  style={{ fill: "#2D527C" }}
                  d="M392.235,358.347h-263.03C57.962,358.347,0,300.386,0,229.143v-25.501
		C0,132.399,57.962,74.437,129.205,74.437h99.349c7.958,0,14.411,6.453,14.411,14.411v70.861c0,7.958-6.453,14.411-14.411,14.411
		h-99.349c-7.958,0-14.411-6.453-14.411-14.411c0-7.958,6.453-14.411,14.411-14.411h84.939v-42.041h-84.939
		c-55.352,0-100.384,45.032-100.384,100.384v25.501c0,55.351,45.032,100.383,100.384,100.383h263.029
		c7.958,0,14.411,6.453,14.411,14.411S400.193,358.347,392.235,358.347z"
                />
                <path
                  style={{ fill: "#2D527C" }}
                  d="M246.369,287.486H129.205c-31.625,0-58.344-26.717-58.344-58.343v-25.501
		c0-7.958,6.453-14.411,14.411-14.411s14.411,6.453,14.411,14.411v25.501c0,15.726,13.795,29.521,29.523,29.521h117.164
		c7.958,0,14.411,6.453,14.411,14.411C260.779,281.033,254.326,287.486,246.369,287.486z"
                />
              </g>
              <polygon
                style={{ fill: "#CEE8FA" }}
                points="311.829,423.152 497.589,307.407 311.829,191.663 "
              />
              <path
                style={{ fill: "#2D527C" }}
                d="M311.829,437.563c-2.407,0-4.816-0.602-6.995-1.811c-4.578-2.542-7.416-7.364-7.416-12.599v-231.49
	c0-5.235,2.839-10.057,7.416-12.599c4.575-2.541,10.172-2.401,14.615,0.369L505.21,295.177c4.224,2.631,6.79,7.254,6.79,12.23
	c0,4.976-2.567,9.599-6.79,12.23L319.449,435.381C317.122,436.834,314.477,437.563,311.829,437.563z M326.239,217.62v179.574
	l144.1-89.788L326.239,217.62z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <span className="ml-2">Back</span>
          </Link>
          <Link
            to={
              props.singers.some((singer) => singer.selected)
                ? "/albums"
                : "/singers"
            }
            className="col-lg-3 col-6 text-center"
            onClick={() => {
              if (!props.singers.some((singer) => singer.selected)) {
                toast.error("Please select at least one singer!");
              }
            }}
          >
            <span className="mr-2">Next</span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{
                enableBackground: "new 0 0 512 512",
                width: "25px",
              }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  style={{ fill: "#2D527C" }}
                  d="M392.235,358.347h-263.03C57.962,358.347,0,300.386,0,229.143v-25.501
		C0,132.399,57.962,74.437,129.205,74.437h99.349c7.958,0,14.411,6.453,14.411,14.411v70.861c0,7.958-6.453,14.411-14.411,14.411
		h-99.349c-7.958,0-14.411-6.453-14.411-14.411c0-7.958,6.453-14.411,14.411-14.411h84.939v-42.041h-84.939
		c-55.352,0-100.384,45.032-100.384,100.384v25.501c0,55.351,45.032,100.383,100.384,100.383h263.029
		c7.958,0,14.411,6.453,14.411,14.411S400.193,358.347,392.235,358.347z"
                />
                <path
                  style={{ fill: "#2D527C" }}
                  d="M246.369,287.486H129.205c-31.625,0-58.344-26.717-58.344-58.343v-25.501
		c0-7.958,6.453-14.411,14.411-14.411s14.411,6.453,14.411,14.411v25.501c0,15.726,13.795,29.521,29.523,29.521h117.164
		c7.958,0,14.411,6.453,14.411,14.411C260.779,281.033,254.326,287.486,246.369,287.486z"
                />
              </g>
              <polygon
                style={{ fill: "#CEE8FA" }}
                points="311.829,423.152 497.589,307.407 311.829,191.663 "
              />
              <path
                style={{ fill: "#2D527C" }}
                d="M311.829,437.563c-2.407,0-4.816-0.602-6.995-1.811c-4.578-2.542-7.416-7.364-7.416-12.599v-231.49
	c0-5.235,2.839-10.057,7.416-12.599c4.575-2.541,10.172-2.401,14.615,0.369L505.21,295.177c4.224,2.631,6.79,7.254,6.79,12.23
	c0,4.976-2.567,9.599-6.79,12.23L319.449,435.381C317.122,436.834,314.477,437.563,311.829,437.563z M326.239,217.62v179.574
	l144.1-89.788L326.239,217.62z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Singers);
