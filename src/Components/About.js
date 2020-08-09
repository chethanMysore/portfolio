import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.getBaseUrl = this.getBaseUrl.bind(this);
  }
  getBaseUrl = () => {
    let baseUrl = !!window.location ? window.location.href : "#";
    const regexp = /(.)*\/#/g;
    let hashedUrl = baseUrl.match(regexp);
    baseUrl =
      !!hashedUrl && !!hashedUrl[0] ? hashedUrl[0].replace("#", "") : baseUrl;
    return !!this.props.data
      ? `${baseUrl}/resume/${this.props.data.resumedownload}`
      : baseUrl;
  };
  render() {
    const { name, bio, phone, email } = !!this.props.data
      ? this.props.data
      : {};
    const { street, city, state, zip } = !!this.props.data
      ? this.props.data.address
      : {};
    const profilepic = !!this.props.data
      ? `images/${this.props.data.image}`
      : "";

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Chethan's Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={this.getBaseUrl()}
                    target="_blank"
                    download={"chethan_cv.pdf"}
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
