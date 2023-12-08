import React from "react";
import logo from "./logo.svg";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Slidebar = () => {
  const { isSlidebarOpen, closeSlidebar } = useGlobalContext();
  return (
    <aside className={isSlidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <button onClick={closeSlidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Slidebar;
