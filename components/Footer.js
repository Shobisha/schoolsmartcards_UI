import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaPhone,
  FaPinterest,
  FaQuora,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Footerback">
        <div className="footerpart1 row">
          <div className="col-md-3">
            <div className="foot1">
              <h3 className="FnavHead">Navigation</h3>
              <div className="FnavBox">
                <Link href="/about-us/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">About</span>
                </Link>
                <Link href="/our-apps/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Our Apps</span>
                </Link>
                <Link href="/pricing/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Pricing</span>
                </Link>
                <Link href="/blog/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Blogs</span>
                </Link>
                <Link href="/contact-us/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foot1">
              <h3 className="FnavHead">Features</h3>
              <div className="FnavBox">
                <Link href="/physical-access-management/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Physical Access Management</span>
                </Link>
                <Link href="/student-data-management/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Student Data Management</span>
                </Link>
                <Link href="/library-management/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Library Management</span>
                </Link>
                <Link href="/cashless-payment/" className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxt">Cashless Payment</span>
                </Link>
                <Link
                  href="/nutritional-and-inventory-management/"
                  className="Fdiv"
                >
                  <div className="roundd"></div>
                  <span className="Fnavtxt">
                    Nutritional and Inventory Management
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <div className="blogdiv">
                <h3 className="FnavHead">Our Blogs</h3>
                <Link href="/blog/" className="moretxtdiv">
                  <span className="moretxt">4MoreBlogs</span>
                </Link>
              </div>
              <div className="">
                <div className="FnavBox3Bg">
                  <div className="classMb-3">
                    <Link href="/blog/smart-card-applications/">
                      <img src="/Images/01.jpg" alt="" className="bigimg" />
                    </Link>
                  </div>
                  <div>
                    <Link href="/blog/smart-cards/">
                      <img src="/Images/02.png" alt="" className="bigimg" />
                    </Link>
                  </div>
                </div>
                <div className="FnavBox3Bg">
                  <div className="classMb-3">
                    <Link href="/blog/benefits-features-smart-card-management-system/">
                      <img src="/Images/03.jpeg" alt="" className="bigimg" />
                    </Link>
                  </div>
                  <div>
                    <Link href="/blog/how-a-student-smart-card-makes-the-librarians-job-simple/">
                      <img src="/Images/04.jpeg" alt="" className="bigimg" />
                    </Link>
                  </div>
                </div>
                <div className="formB">
                  <div className="input-group col-12">
                    <input
                      type="email"
                      className="form-controlf input-field1"
                      placeholder="Subscribe with us"
                    />
                    <input
                      type="submit"
                      value="Join"
                      className="input-field2"
                    />
                  </div>
                </div>
                <div className="utubediv">
                  <div className="utubedivpart">
                    <Link
                      href="/channel/UChuUVXmMotYFDVABd3EkLkw"
                      className="col-md-6"
                    >
                      <img
                        src="/Images/schoollogo.png"
                        alt=""
                        className="schoollogosmall"
                      />
                    </Link>
                    <div className="bottomutube col-md-6">
                      <Link
                        href="/channel/UChuUVXmMotYFDVABd3EkLkw"
                        className="utubetxt"
                      >
                        school smartcards
                      </Link>
                      <Link
                        href="/channel/UChuUVXmMotYFDVABd3EkLkw"
                        className="utube3"
                      >
                        <img
                          src="/Images/youtube.png"
                          alt=""
                          className="utypricon"
                        />
                        <span className="txt5">5</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="foot4">
              <h3 className="FnavHead">Contact Us</h3>
              <div className="FnavBox4">
                <Link href="#" className="Footerlast">
                  <div>
                    <FaHome className="footericon" />
                  </div>
                  <div>
                    <span className="Fnavtxtph">
                      Edsys Tower, Trivandrum Vizhinjam Rd,
                      <br /> Kamaleshwaram, Thiruvananthapuram, Kerala -695009{" "}
                    </span>
                  </div>
                </Link>
                <Link href="#" className="Footerlast">
                  <div>
                    <FaEnvelope className="footericon" />
                  </div>
                  <span className="Fnavtxtph">info@edsys.in</span>
                </Link>
                <Link href="#" className="Footerlast">
                  <div>
                    <FaPhone className="footericon rotate-icon" />
                  </div>
                  <span className="Fnavtxtph">+91 8113 86 0000</span>
                </Link>
                <img
                  src="/Images/followus_linkedin.png"
                  alt=""
                  className="linkedin"
                />
                <div className="F4icondiv">
                  <Link href="" className="F4iconround1">
                    <FaFacebookF className="F4icon" />
                  </Link>
                  <Link href="" className="F4iconround2">
                    <FaPinterest className="F4icon" />
                  </Link>
                  <Link href="" className="F4iconround3">
                    <FaTwitter className="F4icon" />
                  </Link>
                  <Link href="" className="F4iconround4">
                    <FaQuora className="F4icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
