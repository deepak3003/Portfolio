import React from "react";

function Hero() {
  return (
    <section style={styles.hero} id="home">
      <div>
        <h2 style={styles.title}>Hi, I'm Deepak Singh</h2>
        <p style={styles.subtitle}>I build clean, modern web applications.</p>
        <a href="#projects" style={styles.cta}>
          See My Work
        </a>
        <a
          href="#projects"
          
          className="px-2 mx-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition "
        >
          Download CV
        </a>
        <a
          href="/Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 mx-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    background: "#f5f6fa",
    textAlign: "center",
  },
  title: { fontSize: "2.5rem", margin: "0.5rem 0" },
  subtitle: { fontSize: "1.25rem", color: "#555" },
  cta: {
    display: "inline-block",
    marginTop: "2rem",
    padding: "0.75rem 1.5rem",
    background: "#007bfc",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
  },
};

export default Hero;
