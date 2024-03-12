import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [preventDrawerClose, setPreventDrawerClose] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function toggleDrawer() {
    if (!preventDrawerClose) {
      setIsDrawerOpen(!isDrawerOpen);
    }
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDrawerContentClick = () => {
    setPreventDrawerClose(true);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
    setPreventDrawerClose(false);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const currentScrollPercentage =
      (scrollY / (documentHeight - windowHeight)) * 100;

    setScrollPercentage(currentScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`Headcontain ${scrollPercentage > 3 ? "scrolled" : ""}`}>
        <div className="Headpart1">
          <div className="headlogo">
            <Link href="/">
              <img src="/Images/schoollogo.png" alt="" className="schoollogo" />
            </Link>
          </div>
          <div className="headpart2">
            <div className="dropdown">
              <Link href="/about-us/" className="dropbtn">
                About
              </Link>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                <span>Features</span>
                <RiArrowDropDownLine className="arrowicon" />
              </button>
              <div className="dropdown-content">
                <div className="">
                  <Link href="/physical-access-management/" className="Dtxt">
                    Physical Access Management
                  </Link>
                  <Link href="/student-data-management/" className="Dtxt">
                    Student Data Management
                  </Link>
                  <Link href="/library-management/" className="Dtxt">
                    Library Management
                  </Link>
                  <Link href="/cashless-payment/" className="Dtxt">
                    Cashless Payment
                  </Link>
                  <Link
                    href="/nutritional-and-inventory-management/"
                    className="Dtxt"
                  >
                    Nutritional and Inventory Management
                  </Link>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <Link href="/our-apps/" className="dropbtn">
                Our Apps
              </Link>
            </div>
            <div className="dropdown">
              <Link href="/pricing/" className="dropbtn">
                Pricing
              </Link>
            </div>
            <div className="dropdown">
              <Link href="/blog/" className="dropbtn">
                Blogs
              </Link>
            </div>
            <div
              className={`dropdown bgviohead ${
                scrollPercentage > 3 ? "scrolled" : ""
              }`}
            >
              <Link
                href="/contact-us/"
                className={`dropbtnvio ${
                  scrollPercentage > 3 ? "scrolled" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
            <div className="searchdiv">
              <img
                src="/Images/searchvio_icon.png"
                alt=""
                className=" searchicon"
              />
            </div>
          </div>

          <div className="SeMe">
            <img
              src="/Images/searchvio_icon.png"
              alt=""
              className=" searchicon"
            />
            <div className="drawerToggle">
              <IoMdMenu className=" menuicon" onClick={toggleDrawer} />
            </div>
          </div>
          <div
            className={`drawer ${isDrawerOpen ? "open" : ""}`}
            onClick={toggleDrawer}
          >
            <div
              className="drawerContent"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="drawerhead">
                <h6 className="drawerheadtxt">Welcome to</h6>
                <h3 className="drawerheadtxtp">School Smart Cards</h3>
              </div>
              <Link href="/about-us/" className=" headsub">
                <span className="subtxt">About</span>
              </Link>
              <div className="dropdown-container bor">
                <div className="dropbetween">
                  <span className="subtxt">Features</span>
                  {dropdownOpen ? (
                    <FaMinus
                      className="headsub FaMinus dropdown open"
                      onClick={handleDropdownToggle}
                    />
                  ) : (
                    <FaPlus
                      className="FaMinus"
                      onClick={() => setDropdownOpen(true)}
                    />
                  )}
                </div>
                {dropdownOpen && (
                  <div className="link-container">
                    <Link
                      href="/physical-access-management/"
                      onClick={handleDropdownItemClick}
                      className="dropsub"
                    >
                      Physical Access Management
                    </Link>
                    <Link
                      href="/student-data-management/"
                      onClick={handleDropdownItemClick}
                      className="dropsub"
                    >
                      Student Data Management
                    </Link>
                    <Link
                      href="/library-management/"
                      onClick={handleDropdownItemClick}
                      className="dropsub"
                    >
                      Library Management
                    </Link>
                    <Link
                      href="/cashless-payment/"
                      onClick={handleDropdownItemClick}
                      className="dropsub"
                    >
                      Cashless Payment
                    </Link>
                    <Link
                      href="/nutritional-and-inventory-management/"
                      onClick={handleDropdownItemClick}
                      className="dropsub"
                    >
                      Nutritional and Inventory Management
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/our-apps/" className="headsub">
                <span className="subtxt">Our Apps</span>
              </Link>
              <Link href="/pricing/" className=" headsub">
                <span className="subtxt">Pricing</span>
              </Link>
              <Link href="/blog/" className=" headsub">
                <span className="subtxt">Blogs</span>
              </Link>
              <Link href="/contact-us/" className=" headsub">
                <span className="subtxt">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
