import React from "react";
import { NavLink } from "react-router-dom";

function MobileMenu() {
  return (
    <>
      <section className="mobile-menu">
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
      </section>
    </>
  );
}

export default MobileMenu;
