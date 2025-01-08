import React from "react";
import { NavLink } from "@mantine/core";

interface Mobile {
  isMobile: boolean | undefined;
}

const NavLinkss: React.FC<Mobile> = ({ isMobile }) => {
  return (
    <div
      className={
        isMobile
          ? "flex flex-col items-end justify-end gap-2"
          : "flex justify-center items-center gap-2"
      }
    >
      <NavLink
        href="/"
        label="Home"
        style={{ textDecoration: "none", color: "black" }}
      />
      <NavLink
        href="#about"
        label="About"
        style={{ textDecoration: "none", color: "black" }}
      />

      <NavLink
        href="#service"
        label="Services"
        style={{ textDecoration: "none", color: "black" }}
      />

      <NavLink
        href="#contact"
        label="Contact"
        style={{ textDecoration: "none", color: "black" }}
      />
    </div>
  );
};

export default NavLinkss;
