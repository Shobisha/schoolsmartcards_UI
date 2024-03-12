import Link from "next/link";
import React from "react";

const pricing = () => {
  return (
    <>
      <div className="pricingSec">
        <div className="pricingMain col-12">
          <div className="col-6 ">
            <h1 className="Pricingtxt">Pricing</h1>
          </div>
          <div className="col-6">
            <div className="priceImgdiv ">
              <img
                src="/Images/price_img.jpg"
                alt=""
                className="priceImg text-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pricingSec2">
        <div className="pricingMain2">
          <div className="">
            <h3 className="Cashschooltextdiv">Cashless School</h3>
          </div>
          <div className="col-md-12 pricingmainbox">
            <div className="col-md-6">
              <div className="priceBox1">
                <h4 className="text-center">
                  Monthly Subscription fee <br />
                  <span className="changeclrprice">AUD 45</span> /School
                </h4>
                <div className="borderbot SpBetween">
                  <span>Cashless System</span>
                  <span>40 AUD</span>
                </div>
                <div className=" SpBetween">
                  <span>Mobile App</span>
                  <span>5 AUD</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center priceBox2">
                <h5 className="changeclrsmalltxt">One Time Fee</h5>
                <div>
                  <span>Cashless System</span>
                  <span>40 AUD</span>
                </div>
              </div>
              <div className="text-center priceBox2">
                <h5 className="changeclrsmalltxt">One Time Fee</h5>
                <div>
                  <span className="borderbotClr">Point of Sales App</span>
                  <span>SchoolSmartCards Management App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricingSecInv">
        <div className="text-center ">
          <img src="/Images/price_img.jpg" alt="" className="priceImg " />
        </div>
        <div className=" col-12">
          <h1 className="Pricingtxt">Pricing</h1>
        </div>
      </div>
      <div className="pricingSec2Inv">
        <div className="pricingMain2">
          <div className="">
            <h3 className="Cashschooltextdiv">Cashless School</h3>
          </div>
          <div className="col-md-12 pricingmainbox">
            <div className="col-md-6">
              <div className="priceBox1">
                <h4 className="text-center">
                  Monthly Subscription fee <br />
                  <span className="changeclrprice">AUD 45</span> /School
                </h4>
                <div className="borderbot SpBetween">
                  <span>Cashless System</span>
                  <span>40 AUD</span>
                </div>
                <div className=" SpBetween">
                  <span>Mobile App</span>
                  <span>5 AUD</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center priceBox2">
                <h5 className="changeclrsmalltxt">One Time Fee</h5>
                <div>
                  <span>Cashless System</span>
                  <span>40 AUD</span>
                </div>
              </div>
              <div className="text-center priceBox2">
                <h5 className="changeclrsmalltxt">One Time Fee</h5>
                <div>
                  <span className="borderbotClr">Point of Sales App</span>
                  <span>SchoolSmartCards Management App</span>
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

export default pricing;
