import React, { Fragment, useState } from "react";
import { withRouter, Link } from "react-router-dom";

const Submit = (props) => {
  let [state, setState] = useState({
    userName: "",
    userEmail: "",
    mobile: "",
  });
  let { userName, userEmail, mobile } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.userData(state);
    props.history.push("/receipt");
  };
  return (
    <Fragment>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="form-group col-lg-8 col-10">
            <label>Name</label>
            <input
              onChange={handleChange}
              name="userName"
              value={userName}
              type="text"
              required
              maxLength="15"
              minLength="3"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="form-group col-lg-8 col-10">
            <label>Email address</label>
            <input
              onChange={handleChange}
              name="userEmail"
              value={userEmail}
              type="email"
              required
              className={"form-control"}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="form-group col-lg-8 col-10">
            <label>Mobile Number</label>
            <input
              onChange={handleChange}
              name="mobile"
              value={mobile}
              type="number"
              required
              minLength="10"
              maxLength="15"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
        </div>

        <div className="row justify-content-around my-5">
          <div className="form-group row align-items-center col-lg-8 col-10">
            <Link to="/songs" className="col-lg-3 col-6">
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
            <button
              type="submit"
              className="col-lg-3 col-6 text-center btn btn-outline-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(Submit);
