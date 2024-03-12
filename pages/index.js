import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <div className="indexmain1">
        <div className="row indexpart1 col-md-12">
          <div className="col-md-7">
            <div className="indexsub1">
              <div className="indexsub1txt">
                <h1 className="indexsub1Head">
                  You are one <span className="indexsub1clr">smart card </span>
                  away from a
                  <span className="indexsub1clr"> smart school </span>
                  experience!
                </h1>
                <h2 className="RobatoH2light">
                  School bus tracking, ERP Integration, attendance, books,
                  cafeteria and much more!
                </h2>
              </div>
              <Link href="/contact-us/" className="greenButton">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          <div className="col-md-5 inbookdiv">
            <div className="">
              <img src="Images/book_img.png" alt="" className="inbook" />
            </div>
          </div>
        </div>
        <div className="row indexpart1top col-md-12">
          <div className="col-md-5 inbookdiv">
            <div className="">
              <img src="Images/book_img.png" alt="" className="inbook" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="indexsub1">
              <div className="indexsub1txt">
                <h1 className="indexsub1Head">
                  You are one <span className="indexsub1clr">smart card </span>
                  away from a
                  <span className="indexsub1clr"> smart school </span>
                  experience!
                </h1>
                <h2 className="indexsub1Normal">
                  School bus tracking, ERP Integration, attendance, books,
                  cafeteria and much more!
                </h2>
              </div>
              <Link href="/contact-us/" className="greenButton">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="indexmain2">
        <div className=" indexpart2 col-md-12">
          <div className="col-md-5 incardsdiv">
            <div className="">
              <img src="Images/cards_img.png" alt="" className="incardsimg" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="sec2part2">
              <h1 className="indexsub2Head">Why School Smart Cards?</h1>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    All student data merged in to a single card
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Efficient student tracking</span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Strengthens student security
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Advanced form of attendance marking
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Library activities simplified
                  </span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">
                    Ease to access instead of cash
                  </span>
                </div>
              </div>
              <Link href="/contact-us/" className="indexknow">
                <span>Know More!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="indexmain3">
        <div className="">
          <div className="sec3Head">
            <h2>School Smart Card Products</h2>
          </div>
          <div className="indexRowm">
            <div className="col-12 row d-flex">
              <div className="col-md-4">
                <Link href="/physical-access-management/" className="sec3Ibox">
                  <img src="/Images/sec1_icon.png" alt="" className="secimg" />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Physical access cards</h5>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/student-data-management/" className="sec3Ibox">
                  <img src="/Images/sec2_icon.png" alt="" className="secimg" />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Student Data Cards</h5>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/library-management/" className="sec3Ibox">
                  <img src="/Images/sec3_icon.png" alt="" className="secimg" />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Library smart cards</h5>
                </Link>
              </div>
            </div>
            <div className="col-12 row d-flex">
              <div className="col-md-4">
                <Link href="/cashless-payment/" className="sec3Ibox">
                  <img src="/Images/sec4_icon.png" alt="" className="secimg" />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">TrackSchoolBuss</h5>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  href="/nutritional-and-inventory-management/"
                  className="sec3Ibox"
                >
                  <img src="/Images/sec5_icon.png" alt="" className="secimg" />
                  <span className="_brb"></span>
                  <h5 className="sec3IboxHead">Payment Cards</h5>
                </Link>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="indexRowmCP">
            <Link href="/physical-access-management/" className="sec3Ibox">
              <img src="/Images/sec1_icon.png" alt="" className="secimg" />
              <h5 className="sec3IboxHead">Physical access cards</h5>
            </Link>
            <Link href="/student-data-management/" className="sec3Ibox">
              <img src="/Images/sec2_icon.png" alt="" className="secimg" />
              <h5 className="sec3IboxHead">Student Data Cards</h5>
            </Link>

            <Link href="/library-management/" className="sec3Ibox">
              <img src="/Images/sec3_icon.png" alt="" className="secimg" />
              <h5 className="sec3IboxHead">Library smart cards</h5>
            </Link>
            <Link href="/cashless-payment/" className="sec3Ibox">
              <img src="/Images/sec4_icon.png" alt="" className="secimg" />
              <h5 className="sec3IboxHead">TrackSchoolBuss</h5>
            </Link>
            <Link
              href="/nutritional-and-inventory-management/"
              className="sec3Ibox"
            >
              <img src="/Images/sec5_icon.png" alt="" className="secimg" />
              <h5 className="sec3IboxHead">Payment Cards</h5>
            </Link>
          </div>
        </div>
      </div>
      <div className="fixedsec bg-warning">
        <div className="fixedsecdiv">
          <h2 className="fixedHead">How School Smart Cards help Students</h2>
          <div className="col-12">
            <div className="row1">
              <div className="col-md-6 fixbar">
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/ride_icon.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Get a ride</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/attendance_icon.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Mark attendance</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 fixbar">
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/enlightened_icon.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Get enlightened</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fixedIbox">
                    <div className="fixedround">
                      <img
                        src="/Images/Payments_icon.png"
                        alt=""
                        className="roundimg"
                      />
                    </div>
                    <h5 className="fixedIboxHead">Make Payments</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indexusersec">
        <div className="">
          <div className="IuserHead">
            <h2>Our Apps</h2>
          </div>
          <div className="Iuserboxrow row">
            <div className="Iuserboxdiv">
              <div className="Iuserbox">
                <Link href="/parent-app/" className="Iuserboxlink">
                  <img src="Images/parent.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">
                    Parent <br />
                    App
                  </h6>
                </Link>
              </div>
            </div>
            <div className="Iuserboxdiv">
              <div className="Iuserbox">
                <Link
                  href="/school-bus-attendant-app/"
                  className="Iuserboxlink"
                >
                  <img src="Images/attend.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">School Bus Attendant App</h6>
                </Link>
              </div>
            </div>
            <div className="Iuserboxdiv">
              <div className="Iuserbox">
                <Link href="/driver-console-app/" className="Iuserboxlink">
                  <img src="Images/driver.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">
                    Driver Console
                    <br />
                    App
                  </h6>
                </Link>
              </div>
            </div>
            <div className="Iuserboxdiv">
              <div className="Iuserbox">
                <Link
                  href="/school-transport-manager-app/"
                  className="Iuserboxlink"
                >
                  <img src="Images/transport.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">School Transport Manager App</h6>
                </Link>
              </div>
            </div>
            <div className="Iuserboxdiv">
              <div className="Iuserbox">
                <Link href="/teacher-app/" className="Iuserboxlink">
                  <img src="Images/teacher.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">
                    Teacher <br />
                    App
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indexusersecCP">
        <div className="">
          <div className="IuserHead">
            <h2>Our Apps</h2>
          </div>
          <div className="Iuserboxrowcopy row">
            <div className="Iuserboxdivcopy">
              <div className="Iuserbox">
                <Link href="/parent-app/" className="Iuserboxlink">
                  <img src="Images/parent.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">
                    Parent <br />
                    App
                  </h6>
                </Link>
              </div>
            </div>
            <div className="Iuserboxdivcopy">
              <div className="Iuserbox">
                <Link
                  href="/school-bus-attendant-app/"
                  className="Iuserboxlink"
                >
                  <img src="Images/attend.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">School Bus Attendant App</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="Iuserboxrowcopy row">
            <div className="Iuserboxdivcopy">
              <div className="Iuserbox">
                <Link href="/driver-console-app/" className="Iuserboxlink">
                  <img src="Images/driver.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">
                    Driver Console
                    <br />
                    App
                  </h6>
                </Link>
              </div>
            </div>
            <div className="Iuserboxdivcopy">
              <div className="Iuserbox">
                <Link
                  href="/school-transport-manager-app/"
                  className="Iuserboxlink"
                >
                  <img src="Images/transport.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">School Transport Manager App</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="Iuserboxrowcopy CeN row">
            <div className="Iuserboxdivcopy">
              <div className="Iuserbox">
                <Link href="/teacher-app/" className="Iuserboxlink">
                  <img src="Images/teacher.png" className="Iuserppl" />
                  <h6 className="Iuserppltxt">
                    Teacher <br />
                    App
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indexim">
        <div className="indexim1part">
          <img
            src="Images/school_smart_card_img.jpg"
            alt=""
            className="indeximgbg"
          />
        </div>
        <div className="indexim2part">
          <div className="">
            <h2 className="indexim2parthead">
              How School smart cards simplify the life of
              <span className="_lt"> STUDENTS, PARENTS</span> and
              <span className="_lt"> SCHOOL AUTHORITIES</span>
            </h2>
          </div>

          <div className="col-md-12 row">
            <div className="col-md-4 inddiv">
              <div className="inddiv2">
                <div className="H6indeximdiv">
                  <img
                    src="Images/what_students_icon.png"
                    alt=""
                    className="whatimg"
                  />
                  <h6 className="H6indexim">What students can do with it?</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Borrow a book from library
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Pay for School Bus</span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Mark Attendance</span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">Make Payments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 inddiv">
              <div className="inddiv2">
                <div className="H6indeximdiv">
                  <img
                    src="Images/what_parents_icon.png"
                    alt=""
                    className="whatimg"
                  />
                  <h6 className="H6indexim">What Parents can do with it?</h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Real time tracking and updates on child’s location.
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Keep track of each transaction.
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Keep track of student expenses
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 inddiv">
              <div className="inddiv2">
                <div className="H6indeximdiv">
                  <img
                    src="Images/school_teacher_icon.png"
                    alt=""
                    className="whatimg"
                  />
                  <h6 className="H6indexim">
                    For school authorities and teachers
                  </h6>
                </div>
                <div className="FnavBox">
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Real time location information
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Managing students on campus made easiers
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Marking student attendance is way simpler
                    </span>
                  </div>
                  <div className="Fdiv">
                    <div className="roundd"></div>
                    <span className="Fnavtxtbl">
                      Assure maximum security to your students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="GetPricingdiv">
            <Link href="/pricing/" className="GetPricing">
              <span>Get Pricing</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mblsec">
        <div className="mblsecdiv">
          <h2 className="mblsechead">
            Your first step towards a smart school experience!
          </h2>
          <div className="mblsecboxdiv col-12">
            <Link href="/contact-us/" className="mblsecbtnV">
              <span>Let’s Talk!</span>
            </Link>
            <Link href="£" className="mblsecbtn">
              <span>Call Now +91 8113 86 0000</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="cardsec">
        <div className="row cardpart22 col-md-12">
          <div className="col-md-5 Cardcardsdiv">
            <div className="">
              <img
                src="Images/smart-card-printing.jpg"
                alt=""
                className="printcardsimg"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card2part2">
              <h1 className="cardsub2Head">Smart Card Printing</h1>
              <p>
                Do you want to print ID cards on RFID Smart Cards or plain
                Cards? We offer Smart Card Printing services in bulk for
                schools, colleges and offices as well.
              </p>
              <div className="FnavBox">
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Photo ID Cards</span>
                </div>
                <div className="Fdiv">
                  <div className="roundd"></div>
                  <span className="Fnavtxtbl">Time and access Cards</span>
                </div>
              </div>
              <Link href="/contact-us/" className="indexknow">
                <span>Let’s Talk!</span>
              </Link>
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
                <option disabled="" selected="" value="" class="caret-option">
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

export default index;
