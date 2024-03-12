import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMinus, FaPlus } from "react-icons/fa";

const studentmanagement = () => {
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
            <div className="Phy-ImgCenter text-center">
              <img
                src="/Images/student_data_management_img.png"
                alt=""
                className="featureImg"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="phy-part1sec2">
              <h1>Student Data Management</h1>
              <h4>
                Experience intelligent management of all your STUDENT data with
                our DATA management feature using SMART CARDs!
              </h4>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Manage Student profile details smartly
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Manage student year on year cycle effectively
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Integrated with Comprehensive School ERP
                  </span>
                </div>
              </div>
              {/* <Link href="/" className="slow-hover-button">
                <span>Register Now</span>
              </Link> */}
              <button className="slow-hover-button textdec">
                <span>Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="physical-Section3">
        <div className="about-1main">
          <div className="col-md-5">
            <div className="Phy-ImgCenter data_smartImgdiv">
              <img src="/Images/data_smart_card_img.png" alt="" className="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="phy-part1sec2">
              <h1>Data modules managed with Smart Card</h1>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Student Profile details including personal details,
                    institutional details, blood group etc
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Classroom Attendance</span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Library Data – Book issuing and returning, fines, etc
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Access Data - To provide access to school premises like
                    library, canteen etc.
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Examination Attendance </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">School Bus Attendance </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indexmain3student">
        <div className="">
          <div className="sec3Head">
            <h2>Benefits</h2>
          </div>
          <div className="indexRowm">
            <div className="col-12 row d-flex ">
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/access_centralized_data_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Access Centralized data</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/emergency_contact_details_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Emergency Contact details</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/password_protection_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Password Protection</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/data_security_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Data Security</h5>
                </Link>
              </div>
            </div>
            <div className="col-12 row d-flex">
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/add_data_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">
                    Add, edit and delete data with ease
                  </h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/upload_data_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">
                    Bulk upload data using excel files
                  </h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/student_data_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">
                    Provide student/staff behavior data
                  </h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link href="" className="sec3IboxConstant">
                  <img
                    src="/Images/data_backup_icon.jpg"
                    alt=""
                    className="secimg"
                  />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Comprehensive Data backup</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="indexRowmCP">
            <Link href="" className="sec3IboxConstant">
              <img
                src="/Images/access_centralized_data_icon.jpg"
                alt=""
                className="secimg"
              />
              <h5 className="sec3IboxHead">Access Centralized data</h5>
            </Link>
            <Link href="" className="sec3IboxConstant">
              <img
                src="/Images/emergency_contact_details_icon.jpg"
                alt=""
                className="secimg"
              />
              <h5 className="sec3IboxHead">Emergency Contact details</h5>
            </Link>
            <Link href="" className="sec3IboxConstant">
              <img
                src="/Images/password_protection_icon.jpg"
                alt=""
                className="secimg"
              />
              <h5 className="sec3IboxHead">Password Protection</h5>
            </Link>
            <Link href="" className="sec3IboxConstant">
              <img
                src="/Images/data_security_icon.jpg"
                alt=""
                className="secimg"
              />
              <h5 className="sec3IboxHead">Data Security</h5>
            </Link>
            <Link href="" className="sec3IboxConstant">
              <img src="/Images/add_data_icon.jpg" alt="" className="secimg" />
              <h5 className="sec3IboxHead">
                Add, edit and delete data with ease
              </h5>
            </Link>
            <Link href="" className="sec3IboxConstant">
              <img
                src="/Images/upload_data_icon.jpg"
                alt=""
                className="secimg"
              />
              <h5 className="sec3IboxHead">
                Bulk upload data using excel files
              </h5>
            </Link>
            <Link href="" className="sec3IboxConstant">
              <img
                src="/Images/student_data_icon.jpg"
                alt=""
                className="secimg"
              />
              <h5 className="sec3IboxHead">
                Provide student/staff behavior data
              </h5>
            </Link>
            <Link href="" className="sec3IboxConstant">
              <img
                src="/Images/data_backup_icon.jpg"
                alt=""
                className="secimg"
              />
              <h5 className="sec3IboxHead">Comprehensive Data backup</h5>
            </Link>
          </div>
          <div className="col-12 displaycenter">
            <Link href="" className="phyviobtn m-1">
              <span>Let’s Talk!</span>
            </Link>
            <Link href="£" className="phycallbtn m-1">
              <span>Call Now +91 8113 86 0000</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="fixedsec">
        <div className="fixedsecdiv text-center">
          <h2 className="fixedHead">User</h2>
          <div className="col-12">
            <div className="row1">
              <div className="col-md-6 fixbar">
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/teachers_icon_stud.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Teachers</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/staff_icon_stud.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Staff</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 fixbar">
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/management_icon_stud.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Management</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/students_data_icon.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Students</h5>
                  </div>
                </div>
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
                    Can the smart cards be used in schools only?
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
                      No, the edsys’s SMART CARDs can be used in schools and
                      colleges.
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
                    Can the management add additional details of students as
                    required?
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
                      Yes, the management can add details as required.
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
                    Do I get the ERP along with smart cards or am I supposed to
                    buy that separately?
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
                      Our smart card system is a part of the ERP system and
                      therefore you will have to buy the complete system to
                      enjoy its full features.
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

export default studentmanagement;
