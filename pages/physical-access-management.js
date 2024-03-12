import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMinus, FaPlus } from "react-icons/fa";

const physical = () => {
  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (item) => {
    if (openItem === item) {
      setOpenItem(null);
    } else {
      setOpenItem(item);
    }
  };
  return (
    <>
      <div className="physical-Section1">
        <div className="about-1main">
          <div className="col-md-5">
            <div className="Phy-ImgCenter">
              <img
                src="/Images/physical_access_management_img.png"
                alt=""
                className="PhyManImg"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="phy-part1sec2">
              <h1>Physical Access Management</h1>
              <h4>Minimize Security risk and intrusions</h4>
              <h3>Try Physical Access Management Facility using</h3>
              <h2>SMART CARDS!!!</h2>
              <Link href="/" className="greenButton Phy-center">
                <span>Register Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="physical-Section2">
        <div className="about-2main ">
          <div className="col-md-5 ">
            <div className="py-side">
              <img
                src="/Images/benefit_img.png"
                alt=""
                className="PhyManBWrkImg"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="Phy-sec2-bendiv">
              <h2>Benefits</h2>
              <span className="unl"></span>
              <h4>
                The foremost step to protect the school premises (or campus)
              </h4>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Secure and trusted access for authorized users.
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Safe campus for students, teachers, parents and management.
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Issued with a unique key to provide access to authorized
                    users in the secured areas.
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Smart card contains identity details of the individual which
                    is scanned and checked.
                  </span>
                </div>
              </div>
              <h4>Users</h4>
              <div className="phyuser-imgdiv">
                <div className="text-center">
                  <img
                    src="/Images/teachers_icon.png"
                    alt=""
                    className="phyuser-img"
                  />
                  <span>Teachers</span>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/staff_icon.png"
                    alt=""
                    className="phyuser-img"
                  />
                  <span>Staff</span>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/management_icon.png"
                    alt=""
                    className="phyuser-img"
                  />
                  <span>Management</span>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/students_icon_new.png"
                    alt=""
                    className="phyuser-img"
                  />
                  <span>Students</span>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/visitors_icon.png"
                    alt=""
                    className="phyuser-img"
                  />
                  <span>Visitors</span>
                </div>
              </div>
              <div className="PHYROW">
                <div className="phyuser-imgdivsecond">
                  <div className="text-center">
                    <img
                      src="/Images/teachers_icon.png"
                      alt=""
                      className="phyuser-img"
                    />
                    <span>Teachers</span>
                  </div>
                  <div className="text-center">
                    <img
                      src="/Images/staff_icon.png"
                      alt=""
                      className="phyuser-img"
                    />
                    <span>Staff</span>
                  </div>
                </div>
                <div className="phyuser-imgdivsecond">
                  <div className="text-center">
                    <img
                      src="/Images/management_icon.png"
                      alt=""
                      className="phyuser-img"
                    />
                    <span>Management</span>
                  </div>
                  <div className="text-center">
                    <img
                      src="/Images/students_icon_new.png"
                      alt=""
                      className="phyuser-img"
                    />
                    <span>Students</span>
                  </div>
                </div>
                <div className="phyuser-imgdivsecond">
                  <div className="text-center">
                    <img
                      src="/Images/visitors_icon.png"
                      alt=""
                      className="phyuser-img"
                    />
                    <span>Visitors</span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Link href="" className="phyviobtn m-1">
                  <span>Get a Quote</span>
                </Link>
                <Link href="£" className="phycallbtn m-1">
                  <span>Call Now +91 8113 86 0000</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section3">
        <div className="about-1main">
          <div className="col-md-6">
            <div className="Phy-ImgCenter text-center">
              <img
                src="/Images/features_img.png"
                alt=""
                className="featureImg"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="Phy-sec3part2">
              <h2>Features</h2>
              <span className="unl"></span>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Facilitates high security</span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">High-performance </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Easy to carry cards </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Fast and accurate authentication (less than 1 sec.)
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Reduces administrative cost.
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Optional Feature. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="physical-Section4">
        <div className="about-1main">
          <div className="col-md-4">
            <div className="Phy-ImgCenter bg-info">
              <img
                src="/Images/working_physical_img.jpg"
                alt=""
                className="PhyWorkImg"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="phy-sec4part2">
              <h2>Working of Physical Access Management</h2>
              <span className="unl"></span>
              <h4 className="PhytextWork">How does the system work ?</h4>
              <p>
                The hardware like contact or reader is installed at the door and
                wired into a controller.
              </p>
              <p>
                The control system checks the permission and grants access for
                authorized users and deny access for the unauthorized ones.
              </p>
              <p>
                The admin can configure system settings, schedules, and
                authorized users. <br />
                The admin can also view all the details regarding the user’s
                checked in and checked out data and also the areas they used.
              </p>
              <div className="MediaBtnCenter">
                <Link href="/contact-us/" className="phyviobtn m-1">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section5">
        <div className="Phy-5main">
          <div className="Phy-Blogsdiv">
            <h2>
              Blogs <span className="unl"></span>
            </h2>
          </div>
          <div className="">
            <div className="FnavBox3Bg1">
              <div className="classMb-3 col-md-4">
                <div className="m-3">
                  <Link href="/blog/smart-card-applications/">
                    <img src="/Images/01.jpg" alt="" className="bigimgBlog" />
                  </Link>
                  <div className="cardPhy">
                    <span className="">Wednesday December 11, 2019</span>
                    <h4>11 Awesome Everyday Smart Card Applications</h4>
                    <p class="card-text">
                      The advent of smart card applications has created a
                      revolution in modern human life. It has become...
                    </p>
                    <Link href="" className="phyviobtn m-1 rounded-0">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="m-3">
                  <Link href="/blog/smart-cards/">
                    <img src="/Images/02.png" alt="" className="bigimgBlog" />
                  </Link>
                  <div className="cardPhy">
                    <span className="">Friday November 15, 2019</span>
                    <h4>Smart Cards: Definition, Types and Examples</h4>
                    <p class="card-text">
                      Smart cards are really bliss in this new tech era! As we
                      live in a world of...{" "}
                    </p>
                    <Link href="" className="phyviobtn m-1 rounded-0">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="m-3">
                  <Link href="/blog/benefits-features-smart-card-management-system/">
                    <img src="/Images/03.jpeg" alt="" className="bigimgBlog" />
                  </Link>
                  <div className="cardPhy">
                    <span className="">Wednesday October 23, 2019</span>
                    <h4>
                      Benefits and Features of Smart Card Management System
                    </h4>
                    <p class="card-text">
                      People nowadays prefer online transactions and other
                      payment options to make things happen. Hence chances are
                      high...{" "}
                    </p>
                    <Link href="" className="phyviobtn m-1 rounded-0">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="FnavBox3BgInv">
              <div className="classMb-3 col-md-6">
                <div className="m-3">
                  <Link href="/blog/smart-card-applications/">
                    <img src="/Images/01.jpg" alt="" className="bigimgBlog" />
                  </Link>
                  <div className="cardPhy">
                    <span className="">Wednesday December 11, 2019</span>
                    <h4>11 Awesome Everyday Smart Card Applications</h4>
                    <p class="card-text">
                      The advent of smart card applications has created a
                      revolution in modern human life. It has become...
                    </p>
                    <Link href="" className="phyviobtn m-1 rounded-0">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="m-3">
                  <Link href="/blog/smart-cards/">
                    <img src="/Images/02.png" alt="" className="bigimgBlog" />
                  </Link>
                  <div className="cardPhy">
                    <span className="">Friday November 15, 2019</span>
                    <h4>Smart Cards: Definition, Types and Examples</h4>
                    <p class="card-text">
                      Smart cards are really bliss in this new tech era! As we
                      live in a world of...{" "}
                    </p>
                    <Link href="" className="phyviobtn m-1 rounded-0">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="FnavBox3BgInv">
              <div className="col-md-6">
                <div className="m-3">
                  <Link href="/blog/benefits-features-smart-card-management-system/">
                    <img src="/Images/03.jpeg" alt="" className="bigimgBlog" />
                  </Link>
                  <div className="cardPhy">
                    <span className="">Wednesday October 23, 2019</span>
                    <h4>
                      Benefits and Features of Smart Card Management System
                    </h4>
                    <p class="card-text">
                      People nowadays prefer online transactions and other
                      payment options to make things happen. Hence chances are
                      high...{" "}
                    </p>
                    <Link href="" className="phyviobtn m-1 rounded-0">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section6">
        <div className="Phy-6main">
          <div className="Phy-Blogsdiv">
            <h2>
              FAQ<span className="unl"></span>
            </h2>
          </div>
          <div className="FaqBody">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header ">
                  <button
                    className={`accordion-button togglehead ${
                      openItem !== "item1 togglehead"
                        ? "collapsed togglehead"
                        : ""
                    }`}
                    type="button"
                    onClick={() =>
                      toggleItem(openItem === "item1" ? null : "item1")
                    } // Toggle open/close
                  >
                    1) What happens if a card is lost or stolen?
                    <FontAwesomeIcon
                      icon={openItem === "item1" ? FaMinus : FaPlus}
                      className="ms-2"
                    />
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openItem === "item1" ? "show" : ""
                  }`}
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body">
                    <strong>
                      If the smart card is lost, stolen or broken, the admin is
                      able to disable the card through the software. The card
                      doesn’t work unless it is activated again..
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={`accordion-button togglehead ${
                      openItem !== "item2 togglehead"
                        ? "collapsed togglehead"
                        : ""
                    }`}
                    type="button"
                    onClick={() => toggleItem("item2")}
                  >
                    2) Is the card be used only for the main door entrance of
                    the schools?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    openItem === "item2" ? "show" : ""
                  }`}
                  aria-labelledby="headingTwo"
                >
                  <div className="accordion-body">
                    <strong>
                      No, the Smart cards can be used in main entrance doors,
                      office rooms, staff room, library, canteen, conference
                      room etc. It can be used anywhere inside the school
                      premises.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className={`accordion-button togglehead ${
                      openItem !== "item3 togglehead"
                        ? "collapsed togglehead"
                        : ""
                    }`}
                    type="button"
                    onClick={() => toggleItem("item3")}
                  >
                    3) Can the admin make the desired changes if required?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${
                    openItem === "item3" ? "show" : ""
                  }`}
                  aria-labelledby="headingThree"
                >
                  <div className="accordion-body">
                    <strong>
                      Yes, the admin is able to make changes as required.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formsec">
        <h2 className="text-center formhead">
          Lets Talk about Your Business
          <span className="_unl"></span>
        </h2>
        <div className="formsecdiv">
          <form className="form-horizontal">
            <div className="form-group">
              <input
                type="text"
                className="form-controll"
                placeholder="Name"
                name="your_name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-controll"
                placeholder="Email"
                name="your_email"
              />
            </div>

            <div className="form-group">
              <select
                className="form-controll"
                name="required_software"
                id="select_id"
              >
                <option
                  disabled=""
                  selected=""
                  value=""
                  className={`caret-option colorblc`}
                >
                  Trial Software Of
                </option>
                <option>Physical Access Management</option>
                <option>Student Data Management</option>
                <option>Library Management</option>
                <option>Time Table Management</option>
                <option>Cashless Payment</option>
              </select>
              {/* <div className="caret-icon">&#9662;</div> */}
            </div>

            <div className="form-group">
              <textarea
                row="5"
                className="form-controll"
                placeholder="Subject"
              ></textarea>
              <div className="cardbtnnndiv">
                <Link href="/contact-us/" className="cardbtnnn">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default physical;
