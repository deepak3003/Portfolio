import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Deepak Singh</h1>
      <nav>
        <a href="#about" style={styles.link}>
          About
        </a>
        <a href="#projects" style={styles.link}>
          Projects
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    background: "#fff",
    position: "sticky",
    top: 0,
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
    zIndex: 999,
  },
  logo: { fontWeight: "bold", fontSize: "1.25rem" },
  link: {
    margin: "0 1rem",
    color: "#333",
    textDecoration: "none",
    fontWeight: 500,
  },
};

export default Header;
