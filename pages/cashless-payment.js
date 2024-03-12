import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMinus, FaPlus } from "react-icons/fa";

const cashlesspayment = () => {
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
      <div className="cashless-Section1">
        <div className="about-1main">
          <div className="col-md-5">
            <div className="Phy-ImgCenter">
              <img
                src="/Images/cashless_payment_feature_bnr_img.png"
                alt=""
                className="libraryimg"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="phy-part1sec2">
              <h1>Cashless Payment</h1>
              <h5>Deprive your ward of carrying money to school.</h5>
              <h5>Try Cashless payment feature in Smart Cards!!!</h5>
              <div className="lib-centermbl">
                <Link href="/" className="greenButton ">
                  <span>Register Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section1">
        <div className="about-1main col-md-12">
          <div className="col-md-5">
            <div className="Caseless-utubediv">
              <iframe
                src="https://www.youtube.com/embed/IC7wsfo8xu8"
                controls="0"
                allow="autoplay; encrypted-media"
                allowfullscreen=""
                class="_auto-v-0 "
                className="Caseless-utube"
              ></iframe>
            </div>
          </div>
          <div className="col-md-7">
            <div className="Phy-sec2-bendiv">
              <h2>Features</h2>
              <span className="unl"></span>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="rounddBink"></div>
                  <span className="Fnavtxtbl">
                    Students no longer need to carry money to school
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddBink"></div>
                  <span className="Fnavtxtbl">
                    Students can access Smart cards in school canteen, school
                    stationery shop
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddBink"></div>
                  <span className="Fnavtxtbl">
                    Can be used in school library for paying fines
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddBink"></div>
                  <span className="Fnavtxtbl">
                    Parents can credit money in Smart cards as required
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddBink"></div>
                  <span className="Fnavtxtbl">
                    Parents get notified when their ward accesses cashless
                    payment feature
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddBink"></div>
                  <span className="Fnavtxtbl">
                    Parents can easily pay school fee and bus fee{" "}
                  </span>
                </div>
              </div>
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
      <div className="indeximLib bgdiffwhite">
        <div className="indexim2part">
          <div className="col-md-12 row">
            <div className="col-md-4 inddiv">
              <div className="inddiv3">
                <div className="H6indeximdiv">
                  <img
                    src="/Images/cashless_payment_management_img.png"
                    className="whatimg"
                  />
                  <h6 className="H6indexim">Benefits for School Management</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">Lower time and effort</span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">User friendly</span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">Saves paper work </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">Reduce manual effort</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 inddiv">
              <div className="inddiv3">
                <div className="H6indeximdiv">
                  <img
                    src="/Images/cashless_payment_parents_img.png"
                    alt=""
                    className="whatimg"
                  />
                  <h6 className="H6indexim">Benefits for Parents</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">
                      Quick and easy way to pay school and bus fees
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">Consumes less time</span>
                  </div>
                  <div className="lib-centermbl">
                    <Link href="/" className="greenButton ">
                      <span>Get ricing</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 inddiv">
              <div className="inddiv3">
                <div className="H6indeximdiv">
                  <img
                    src="/Images/cashless_payment_students_img.png"
                    alt=""
                    className="whatimg"
                  />
                  <h6 className="H6indexim">Benefits for Students</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">Reduce the risk of theft </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">
                      Can easily pay library fine{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">
                      Can be used in school canteen for buying foods{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddBink"></div>
                    <span className="Fnavtxtbl">
                      Can be used in school stationery shop to buy books, pens
                      etc
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CashlessSimple">
        <div className="Phy-Blogsdiv">
          <h2>
            Point of Sale Apps <span className="unl"></span>
          </h2>
        </div>
        <div className="CashlessSimpletxtB">
          <p>
            One of the most crucial elements of our Cashless Payment System is
            our POS Apps.When carrying out transactions using Smart Cards,
            parents, staff and students are using our POS facility which has two
            key interfaces - one the web and other on mobile. It is through this
            facility that cashless payment works for school library, canteen,
            stationary shop etc.
          </p>
        </div>
      </div>
      <div className="CashlessSimple">
        <div className="about-1main">
          <div className="col-md-6">
            <Carousel
              controls={false}
              indicators={true}
              interval={null}
              className="custom-carousel"
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/create_products.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/create_wallet_recharge (1).png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/products_list.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/store_creation.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/category_creation.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">
            <div className="cashless-webapp">
              <h2>
                Web App<span className="unl"></span>
              </h2>
              <p>
                The web app provides an interface for the school admin to be in
                control of back end purposes such as adding users, creating
                stores, categories and products respectively. They can also use
                it to manage each point of sales, cashiers and generate various
                monthly reports.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="CashlessSimple">
        <div className="about-1main">
          <div className="col-md-6">
            <div className="">
              <h2>
                Mobile App<span className="unl"></span>
              </h2>
              <p>
                Be it the Cashier at the Canteen or the Library or any point of
                sale in the school, the SchoolSmartCards POS App will make it
                easy for them to connect to the School ERP and inventory,
                collect payment and keep track of all purchases. It’s easy for
                school administration too as each cashier can have a different
                user profile for better management.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Carousel
              controls={false}
              indicators={true}
              interval={null}
              className="custom-carousel"
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/m_slider1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/cash-login.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/cash-Payment-page.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/cash-category-page.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/cash-availability-Page.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="fixedsec">
        <div className="fixedsecdivCash">
          <h2 className="fixedHead">User</h2>

          <div className="col-12 fixbar">
            <div className="col-4">
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
            <div className="col-4">
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
            <div className="col-4">
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
                    Do the parents can check the balance available in Smart
                    Cards?
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
                      Yes, parents can check the amount left and can credit as
                      well.
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
                    Will the parents get invoice for the money spend by our
                    ward?
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
                      Parents can get to know in detail regarding the money
                      spent by your ward in school.
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
                    Shall we pay school and bus fee without visiting the school?
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
                      Yes, you can conveniently pay school and bus fee through
                      online payment using cashless payment feature in Smart
                      Cards.
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

export default cashlesspayment;
