import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/logo.jpg";

const navLinks = [
  "Home",
  "About",
  "Services",
  "Testimonial",
  "Certificate",
  "Contact",
];

export default function NavbarSection() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#9c0202] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Image */}
        <a href="#home" className="block">
  <img src={Logo} alt="Logo" className="h-20 w-auto cursor-pointer" />
</a>


        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
        {navLinks.map((link) => (
            <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="group relative inline-block px-1 text-white transition-all duration-300 hover:text-white font-commissioner"
            >
            <span className="relative z-10">{link}</span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
        ))}
        </div>


        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon className="text-white" />
          </IconButton>
        </div>
      </div>

      {/* Offcanvas Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="w-64 p-4 bg-white h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Menu</h2>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            {navLinks.map((text) => (
              <ListItem
                button
                key={text}
                onClick={toggleDrawer(false)}
                component="a"
                href={`#${text.toLowerCase()}`}
                className="py-3"
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
}
