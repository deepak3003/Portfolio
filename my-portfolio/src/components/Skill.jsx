import React from "react";

const skills = [
  { name: "React", level: 70 }, // Progress as percent
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 60 },
  { name: "Machine Learning", level: 40 },
];

const Skill = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "3rem 1rem",
        backgroundColor: "#f2f6ff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2.2rem",
          color: "#333",
        }}
      >
        My Skills
      </h2>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              padding: "1rem 1.5rem",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Skill icon placeholder: replace with an icon if you want */}
            <div
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#4caf50",
                borderRadius: "50%",
                marginRight: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {skill.name[0]}
            </div>
            <div style={{ flexGrow: 1 }}>
              <div
                style={{ fontSize: "1.1rem", fontWeight: "600", color: "#222" }}
              >
                {skill.name}
              </div>
              <div
                style={{
                  height: "10px",
                  width: "100%",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "7px",
                  marginTop: "0.5rem",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    backgroundColor: "#4caf50",
                    borderRadius: "7px",
                    transition: "width 0.6s ease",
                  }}
                />
              </div>
            </div>
            <div
              style={{ marginLeft: "1rem", fontWeight: "500", color: "#555" }}
            >
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
