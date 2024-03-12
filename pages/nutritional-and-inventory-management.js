import Link from "next/link";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaFileAlt, FaRetweet } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const NutritionalManagement = () => {
  return (
    <>
      <div className="physical-Section1">
        <div className="about-1main">
          <div className="col-md-5">
            <div className="Phy-ImgCenter text-center">
              <img
                src="/Images/nutritional_bnr_img.png"
                alt=""
                className="nutritionalImg"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="phy-part1sec2">
              <h1>Nutritional and Inventory Management</h1>
              <h4>Simplify your workflow & make things systematically!!!</h4>
              <div className="lib-centermbl">
                <Link href="/" className="greenButton ">
                  <span>Register Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section3">
        <div className="about-1main col-md-12">
          <div className="col-md-8">
            <div className="phy-part1sec2 data_smartPresent">
              <h1>Our highlights</h1>
              <div className="col-12 fixbar">
                <div className="col-4">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaFileAlt className="HighlightImg" />
                    </div>
                    <p>Manage orders</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className=" nutbox ">
                    <div className="HighlightImgdiv">
                      <FaRetweet className="HighlightImg" />
                    </div>
                    <p>End-to-end tracking</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className=" nutbox ">
                    <div className="HighlightImgdiv">
                      <FaChartLine className="HighlightImg" />
                    </div>
                    <p>Increase sales</p>
                  </div>
                </div>
              </div>
              <div className="col-12 fixbar">
                <div className="col-4">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaUsers className="HighlightImg" />
                    </div>
                    <p>Warehouse management</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaGears className="HighlightImg" />
                    </div>
                    <p>Optimize fulfillment</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaHeadphones className="HighlightImg" />
                    </div>
                    <p>Better customer service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="phy-part1sec2 data_smartInvisible">
              <h1>Our highlights</h1>
              <div className="col-12 fixbar">
                <div className="col-6">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaFileAlt className="HighlightImg" />
                    </div>
                    <p>Manage orders</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" nutbox ">
                    <div className="HighlightImgdiv">
                      <FaRetweet className="HighlightImg" />
                    </div>
                    <p>End-to-end tracking</p>
                  </div>
                </div>
              </div>
              <div className="col-12 fixbar">
                <div className="col-6">
                  <div className=" nutbox ">
                    <div className="HighlightImgdiv">
                      <FaChartLine className="HighlightImg" />
                    </div>
                    <p>Increase sales</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaUsers className="HighlightImg" />
                    </div>
                    <p>Warehouse management</p>
                  </div>
                </div>
              </div>
              <div className="col-12 fixbar">
                <div className="col-6">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaGears className="HighlightImg" />
                    </div>
                    <p>Optimize fulfillment</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" nutbox">
                    <div className="HighlightImgdiv">
                      <FaHeadphones className="HighlightImg" />
                    </div>
                    <p>Better customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Phy-ImgCenter data_smartImgdiv">
              <img
                src="/Images/nutritional_img1.png"
                alt=""
                className="nutritionalimg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section2">
        <div className="about-2main col-md-12">
          <div
            className="col-md-5 nutritiongirlimg
          "
          >
            <div className="invisiblediv">
              <img src="/Images/nutritional_img2.png" alt="" className="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="Phy-sec2-bendiv">
              <h4>Benefits</h4>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To maintain uniformity between menu concepts and pricing
                    with centralized management controls{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To keep record of plethora of dishes under fast, flexible,
                    efficient and healthy recipe creation{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To accurately calculate the orders and menus to get optimal
                    menu pricing{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To convert orders into invoices instantly
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Interfacing invoices with food purveyors ordering system for
                    details regarding price and ingredients{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To compare multiple bids and real-time pricing data{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To analyze sales and ensure necessary items are handy{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To calculate nutritional information of the recipes
                    instantly using the pre-loaded nutritional data of the
                    ingredients{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Use advance technology to reduce labor costs and increase
                    efficiencies{" "}
                  </span>
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
      </div>
      <div className="NutritionalSec">
        <h1>Our highlights</h1>
        <div className="col-md-12 Nutritionalmain">
          <div className="col-md-6">
            <div className="Nutritionalboxdiv">
              <div className="Nutritionalbox">
                <div>
                  <img src="/Images/nutritional_img3.png" alt="" />
                </div>
                <div className="NutritionalboxdivText">
                  <h3>Recipe &amp; Menu costing</h3>
                  <p>
                    This feature helps canteen authorities to quickly calculate
                    a food service menu. Recipe and menu costing help to
                    maximize profits through calculating recipe costs, cutting
                    down on waste, reduce labor hours and track inventory
                    effectively.
                  </p>
                </div>
              </div>
              <div className="Nutritionalbox">
                <div>
                  <img src="/Images/nutritional_img5.png" alt="" />
                </div>
                <div className="NutritionalboxdivText">
                  <h3>Nutritional Analysis</h3>
                  <p>
                    Eat healthy! <br />
                    Stay healthy! <br />
                    Nutritional values for the recipes can be easily calculated.
                    It helps to meet the demands of both health requirements and
                    health conscious customers. Consumers all over the world are
                    often conscious of the presence of allergens in the foods
                    they consume. Without this system, this process of analyzing
                    recipes and storing information could be a cumbersome and
                    time-consuming process.
                  </p>
                </div>
              </div>
              <div className="Nutritionalbox">
                <div>
                  <img src="/Images/nutritional_img4.png" alt="" />
                </div>
                <div className="NutritionalboxdivText">
                  <h3>Inventory Control</h3>
                  <p>
                    The food inventory represents a significant investment of
                    money and time. This feature allows you to see changing food
                    costs, quickly calculate the total value of goods in
                    inventory, make changes to your desired food cost, compare
                    sales and purchase information.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Nutritionalboxdiv">
              <div className="Nutritionalbox">
                <div>
                  <img src="/Images/nutritional_img6.png" alt="" />
                </div>
                <div className="NutritionalboxdivText">
                  <h3>Sales Analysis</h3>
                  <p>
                    Sales details can be tracked, incorporating this information
                    with the known value of each inventory provides you with
                    clear picture of your business’s profit and loss data
                  </p>
                  <p>Thereby resulting you to track sales day-to- day. </p>
                  <p>
                    <strong>Sales Analysis</strong> Track rising food costs
                    automatically
                  </p>
                </div>
              </div>
              <div className="Nutritionalbox">
                <div>
                  <img src="/Images/nutritional_img7.png" alt="" />
                </div>
                <div className="NutritionalboxdivText">
                  <h3>Purchasing and Ordering</h3>
                  <p>
                    It is always beneficial to have a powerful back -of-the
                    -house foodservice tool to ensure the smooth running of your
                    operation.
                  </p>
                  <div className="Fdiv">
                    <div className="rounddPlane"></div>
                    <span className="Fnavtxtbl">
                      It helps to generate orders based on par levels
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddPlane"></div>
                    <span className="Fnavtxtbl">
                      Mobile tablet can be used for ordering{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddPlane"></div>
                    <span className="Fnavtxtbl">
                      Track purchasing in detail and summary{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddPlane"></div>
                    <span className="Fnavtxtbl">
                      Convert orders into invoice instantaneously{" "}
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="rounddPlane"></div>
                    <span className="Fnavtxtbl">Compare vendor bids </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="physical-Section2">
        <div className="about-2main col-md-12">
          <div
            className="col-md-5 nutritiongirlimg
          "
          >
            <div className="invisiblediv">
              <img src="/Images/nutritional_img8.png" alt="" className="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="Phy-sec2-bendiv">
              <h2>Our excellent inventory features includes</h2>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Track increase in food costs automatically
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Compare vendor pricing easily- purchases or bids{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Use mobile tablet for inventory taking
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    To convert orders into invoices instantly
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Customized reports on purchases, bids, and credits can be
                    generated easily
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Automatically track activity based on purchases and sales{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Calculate overall percentage of food cost{" "}
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="rounddPlane"></div>
                  <span className="Fnavtxtbl">
                    Unlimited capacity for adding additional ingredients
                  </span>
                </div>
                <div className="lib-centermbl">
                  <Link href="/contact-us/" className="greenButton ">
                    <span>Contact us</span>
                  </Link>
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
                  <div className="cardPhy bgWhite">
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
                  <div className="cardPhy bgWhite">
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
                  <div className="cardPhy bgWhite">
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
                  <div className="cardPhy bgWhite">
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
                  <div className="cardPhy bgWhite">
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
                  <div className="cardPhy bgWhite">
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

export default NutritionalManagement;
