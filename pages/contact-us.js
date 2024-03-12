import Link from "next/link";
import React from "react";

const contact = () => {
  return (
    <>
      <div className="contactmain">
        <div className="contactdiv">
          <div className="contactHeading">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="contactOuter">
        <div className="contactPara">
          <p className="contactParatxt">CONTACT</p>
        </div>
        <div className="row col-md-12">
          <div className="col-md-8 backdark">
            <div className="ConForm">
              <div className="form-groupcon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-groupcon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-groupcon">
                <select className="form-control form_bgnd">
                  <option disabled="" selected="" value="">
                    Trial Software Of
                  </option>
                  <option>Physical Access Management</option>
                  <option>Student Data Management</option>
                  <option>Library Management</option>
                  <option>Time Table Management</option>
                  <option>Cashless Payment</option>
                </select>
                <div className="caret-icon">&#9662;</div>
              </div>
              <div className="form-groupcon ">
                <textarea
                  row="5"
                  className="form-control form_bgnd syltextarea"
                  placeholder="Subject"
                ></textarea>
              </div>
              <div className="form-groupcon sentbtndiv">
                <Link href="£" type="submit" className="sentbtn">
                  Send Message
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 backwhite">
            <div className="cont_address">
              <h3>
                CONTACT <span>INFORMATION</span>
              </h3>
              <p>
                Edsys Tower,
                <br />
                Trivandrum Vizhinjam Rd,
                <br />
                Kamaleshwaram,
                <br />
                Thiruvananthapuram,
                <br />
                Kerala -695009.
                <br />
              </p>
              <div className="cont_no">
                <span>Phone</span> - +91 8113 86 0000
                <br />
                <span>Email</span> - info@edsys.in
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3946.313481437977!2d76.94547570001544!3d8.468866199995722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb116e53265f%3A0xa4858dff0a692cf7!2sEdsys+Smart+Education+software+Solutions!5e0!3m2!1sen!2sin!4v1530694620339"
          frameborder="0"
          className="Conmap"
          allowfullscreen=""
        ></iframe>
      </div>
    </>
  );
};

export default contact;
