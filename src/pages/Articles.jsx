import React, { useState } from "react";
import "../index.css";
import MobileMenu from "../components/MobileMenu";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";

function Articles() {
  const [toggle, setToggle] = useState(false);
  const goback = useNavigate();
  return (
    <div className="article-container md:px-32 ">
      <nav className="nav-container">
        <i
          className="material-icons block md:hidden text-4xl cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <MdMenuBook />
        </i>
        <h1 className="heading">SDG</h1>
        <div className="go-back rounded-full text-[#ffcdab] bg-gradient-to-r from-[#003366] to-[#3399CC]" onClick={()=>{goback(-1)}}>
          Go back
        </div>
      </nav>
      <div className="outer-container">
        <div className="inner-container">
          {toggle && <MobileMenu />}
          <aside className="sidebar-container">
            <NavLink to="sdg" className="sidebar-child">
              SDG
            </NavLink>
            <NavLink to="sdg1" className="sidebar-child">
              No Poverty
            </NavLink>
            <NavLink to="sdg2" className="sidebar-child">
              Zero Hunger
            </NavLink>
            <NavLink to="sdg3" className="sidebar-child">
              Good Health
            </NavLink>
            <NavLink to="sdg4" className="sidebar-child">
              Quality Education
            </NavLink>
            <NavLink to="sdg5" className="sidebar-child">
              Gender Equality
            </NavLink>
            <NavLink to="sdg6" className="sidebar-child">
              Sanitation
            </NavLink>
            <NavLink to="sdg7" className="sidebar-child">
              Affordabilty
            </NavLink>
            <NavLink to="sdg8" className="sidebar-child">
              Economic Growth
            </NavLink>
            <NavLink to="sdg9" className="sidebar-child">
              Industrialization
            </NavLink>
            <NavLink to="sdg10" className="sidebar-child">
              Reduced Inequality
            </NavLink>
            <NavLink to="sdg11" className="sidebar-child">
              Sustainable Communities
            </NavLink>
            <NavLink to="sdg12" className="sidebar-child">
              Responsible Consumption
            </NavLink>
            <NavLink to="sdg13" className="sidebar-child">
              Climate Action
            </NavLink>
            <NavLink to="sdg14" className="sidebar-child">
              Life Below Water
            </NavLink>
            <NavLink to="sdg15" className="sidebar-child">
              Life on Land
            </NavLink>
            <NavLink to="sdg16" className="sidebar-child">
              Strong Institutions
            </NavLink>
            <NavLink
              to="sdg17"
              className="sidebar-child border-b-0 border-r-2 border-r-[#101f77]"
            >
              Partnerships for the Goals
            </NavLink>
          </aside>
          <div className="content-container">
            <div className="content">
              <Outlet />
            </div>
            <footer className="footer-container">
              <h1>
                Made with ❤️ by <strong>"scriptSquad"</strong>
              </h1>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
