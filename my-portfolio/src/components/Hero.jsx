import React from "react";

function Hero() {
  return (
    <section style={styles.hero} id="home">
      <div>
        <h2 style={styles.title}>Hi, I'm Deepak Singh</h2>
        <p style={styles.subtitle} className="pb-5">
          I build clean, modern web applications.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4 mb-6">
          <SocialLink
            href="https://www.linkedin.com/in/deepak3003/"
            src="/icons8-linkedin-50.png"
            alt="LinkedIn"
          />
          <SocialLink
            href="https://github.com/deepak3003"
            src="/icons8-github.gif"
            alt="GitHub"
          />
          <SocialLink
            href="https://codolio.com/profile/deepak3003"
            src="/codolio.svg"
            alt="Codolio"
          />
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

// Reusable Social Link component with large icons
function SocialLink({ href, src, alt, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-blue-600 hover:underline"
      style={{ fontSize: "1.125rem" }}
    >
      <img src={src} alt={alt} style={{ width: "50px", height: "50px" }} />
      {text}
    </a>
  );
}

const styles = {
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    backgroundColor: "#f5f6fa",
    textAlign: "center",
    padding: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0.5rem 0",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#555",
  },
};

export default Hero;
