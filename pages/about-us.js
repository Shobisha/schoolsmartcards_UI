import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <>
      <div className="about-Bg">
        <div className="about-1main ">
          <div className="col-md-5">
            <div className="about-part1sec1">
              <img src="Images/about_bnr_img.png" alt="" className="aboutbnr" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-part1sec2">
              <h1>About Us</h1>
              <p>
                Enhance the convenience &amp; security of school experience with
                SCHOOL SMART CARDS
              </p>
              <Link href="" className="greenButton">
                <span>Talk To Us</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="about-1main about-BgInvisible">
          <div className="col-md-5">
            <div className="about-part1sec1">
              <img src="Images/about_bnr_img.png" alt="" className="aboutbnr" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-part1sec2">
              <h1>About Us</h1>
              <p>
                Enhance the convenience &amp; security of school experience with
                SCHOOL SMART CARDS
              </p>
              <Link href="" className="greenButton">
                <span>Talk To Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-page ">
        <div className="about-2main">
          <div className="col-md-5">
            <div className="about-part2sec1">
              <img src="/Images/about_img_new.jpg" alt="" className="bnrnews" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-part2sec2">
              <p>
                SchoolSmartCards is a venture by Edsys Pvt Ltd. It has been
                conceived with the aim of providing high quality smart card
                related products including ERP software for schools.{" "}
              </p>
              <p>
                We have a passionate and dedicated professional team working on
                the development side to continuously improve the portfolio of
                SchoolSmartCards products. The desire to create such products is
                born out of a realization that students are tomorrow’s future
                and needs to be nurtured in the right way. For this, schools
                need to spend their energies focusing on student development
                rather than on matters such as attendance, school bus
                transportation etc, which consume additional time and resources.
              </p>
              <p>
                Our team’s years of experience in the education domain help us
                to create better products. We also have an active on-field team
                that constantly provides us hands-on feedback.{" "}
              </p>
              <p>
                It is our ardent desire and mission to provide each of our
                clients with the best of user experiences in terms of
                management, usability and return on investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
