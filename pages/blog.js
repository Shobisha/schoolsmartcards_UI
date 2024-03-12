import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const blog = () => {
  return (
    <>
      <div className="BlogSection1">
        <div className="BlogSectionBg">
          <h2 className="BLogText">Blog</h2>
          <div className="">
            <Link href="" className="BlogHometxt">
              Home
            </Link>
            <MdKeyboardArrowRight className="arrowclricon" />

            <span className="BLogTextNor">Blog</span>
          </div>
        </div>
      </div>
      <div className="BlogSection2">
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
                  <h4>Benefits and Features of Smart Card Management System</h4>
                  <p class="card-text">
                    People nowadays prefer online transactions and other payment
                    options to make things happen. Hence chances are high...{" "}
                  </p>
                  <Link href="" className="phyviobtn m-1 rounded-0">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="FnavBox3Bg1">
            <div className="classMb-3 col-md-4">
              <div className="m-3">
                <Link href="/blog/how-a-student-smart-card-makes-the-librarians-job-simple/">
                  <img src="/Images/04.jpeg" alt="" className="bigimgBlog" />
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
                  <h4>Benefits and Features of Smart Card Management System</h4>
                  <p class="card-text">
                    People nowadays prefer online transactions and other payment
                    options to make things happen. Hence chances are high...{" "}
                  </p>
                  <Link href="" className="phyviobtn m-1 rounded-0">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="m-3">
                <Link href="/blog/how-a-student-smart-card-makes-the-librarians-job-simple/">
                  <img src="/Images/04.jpeg" alt="" className="bigimgBlog" />
                </Link>
                <div className="cardPhy">
                  <span className="">Wednesday October 23, 2019</span>
                  <h4>Benefits and Features of Smart Card Management System</h4>
                  <p class="card-text">
                    People nowadays prefer online transactions and other payment
                    options to make things happen. Hence chances are high...{" "}
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
    </>
  );
};

export default blog;
