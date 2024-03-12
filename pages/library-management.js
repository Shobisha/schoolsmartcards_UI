import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMinus, FaPlus } from "react-icons/fa";

const libraryManagement = () => {
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
            <div className="Phy-ImgCenter displaycenter">
              <img
                src="/Images/library_bnr_img.png"
                alt=""
                className="libraryimg"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="phy-part1sec2">
              <h1>Library Management</h1>
              <h5>
                Experience library activities systematized and synchronized than
                ever...
              </h5>
              <h3>Get our "Library Management Feature" using </h3>
              <h2>SMART CARDS!!!</h2>
              <div className="lib-centermbl">
                <Link href="/" className="greenButton ">
                  <span>Register Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section2">
        <div className="about-2main col-md-12">
          <div className="col-md-5 ">
            <div className="py-side">
              <img src="/Images/lib_benefits1.png" alt="" className="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="Phy-sec2-bendiv">
              <h2>Benefits</h2>
              <span className="unl"></span>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Easy & simple everyday operation{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Increase engagement </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Improve materials circulation
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Reduce operating cost</span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Data security and longevity</span>
                </div>
              </div>
              {/* <div className="displayrow"> */}
              <div className="col-md-12">
                <Link href="" className="phyviobtn">
                  <span>Let’s Talk!</span>
                </Link>
                <Link href="£" className="phycallbtn ">
                  <span>Call Now +91 8113 86 0000</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Lib4user">
        <div className="Lib4usermain">
          <h2>
            Users <span className="unl"></span>
          </h2>
        </div>
        <div className="Lib4userrow col-md-12">
          <div className="col-md-3 ">
            <div className="Lib4userBox borderlineRight">
              <img
                src="/Images/library_students_icon.png"
                alt=""
                className="libuser"
              />
              <span>Students</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="Lib4userBox borderlineRight">
              <img
                src="/Images/library_teachers_icon.png"
                alt=""
                className="libuser"
              />
              <span>Teacher</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="Lib4userBox borderlineRight">
              <img
                src="/Images/library_librarian_icon.png"
                alt=""
                className="libuser"
              />
              <span>Librarian</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="Lib4userBox">
              <img
                src="/Images/library_management_icon.png"
                alt=""
                className="libuser"
              />
              <span>Students</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Lib4user2">
        <div className="Phy-Blogsdiv">
          <h2>
            Users<span className="unl"></span>
          </h2>
        </div>

        <div className="Lib4userrow col-12">
          <div className="col-6 ">
            <div className="Lib4userBox borderlineRight">
              <img
                src="/Images/library_students_icon.png"
                alt=""
                className="libuser"
              />
              <span>Students</span>
            </div>
          </div>
          <div className="col-6">
            <div className="Lib4userBox">
              <img
                src="/Images/library_teachers_icon.png"
                alt=""
                className="libuser"
              />
              <span>Teacher</span>
            </div>
          </div>
        </div>
        <div className="Lib4userrow col-12">
          <div className="col-6">
            <div className="Lib4userBox borderlineRight">
              <img
                src="/Images/library_librarian_icon.png"
                alt=""
                className="libuser"
              />
              <span>Librarian</span>
            </div>
          </div>
          <div className="col-6">
            <div className="Lib4userBox">
              <img
                src="/Images/library_management_icon.png"
                alt=""
                className="libuser"
              />
              <span>Students</span>
            </div>
          </div>
        </div>
      </div>
      <div className="indeximLib">
        <div className="indexim1partLib">
          <div className="bgoverlayLib"></div>
        </div>
        <div className="indexim2part bg-gray">
          <div className="col-md-12 row">
            <div className="col-md-6 inddiv">
              <div className="inddiv2">
                <div className="H6indeximdiv">
                  <h6 className="H6indexim">For Users (Students/Teachers)</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Can borrow & return books easily{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Extend due date</span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Users can easily check in/check out{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Request new books</span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Extend due date</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 inddiv">
              <div className="inddiv2">
                <div className="H6indeximdiv">
                  <h6 className="H6indexim">For Librarian</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Librarians can track the issue and return date of books{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Details of the book taken{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Number of books issued </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Automatic fine calculation for late returns{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 row">
            <div className="col-md-6 inddiv">
              <div className="inddiv2">
                <div className="H6indeximdiv">
                  <h6 className="H6indexim">For Management (admin)</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Track and manage all users{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Details of all materials</span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Revenue generated details{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Operational reports</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 inddiv">
              <div className="caslesstext inddiv2 displaycentercol">
                <h6 className="H6indexim ">Empower your school library </h6>
                <h2>SMARTly….</h2>
                <Link href="/" className="greenButton ">
                  <span>Register Now</span>
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
                    Can the smart cards help the librarian to know all the
                    details of the books taken by each student?
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
                      Yes, the librarian is able to access all the details of
                      the books taken by each student using SMART CARDS.
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
                    What are the details available for the librarian using SMART
                    CARDS?
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
                      The librarian can easily know the details of the books
                      taken by the student, borrowing date, returning dates,
                      fines etc.
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

export default libraryManagement;
