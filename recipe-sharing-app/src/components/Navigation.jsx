import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all");

  const navItems = [
    { id: "all", label: "All Recipes", path: "/" },
    { id: "favorites", label: "My Favorites", path: "/favorites" },
    { id: "recommendations", label: "Recommended", path: "/recommendations" },
  ];

  const navStyle = {
    backgroundColor: "#fff",
    borderBottom: "1px solid #e0e0e0",
    padding: "0 20px",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "20px",
  };

  const navListStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "30px",
  };

  const navItemStyle = (isActive) => ({
    padding: "15px 0",
    borderBottom: isActive ? "3px solid #007bff" : "3px solid transparent",
    transition: "border-color 0.3s ease",
  });

  const navLinkStyle = (isActive) => ({
    textDecoration: "none",
    color: isActive ? "#007bff" : "#666",
    fontWeight: isActive ? "600" : "400",
    fontSize: "16px",
    transition: "color 0.3s ease",
  });

  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.id} style={navItemStyle(isActive)}>
              <Link
                to={item.path}
                style={navLinkStyle(isActive)}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
