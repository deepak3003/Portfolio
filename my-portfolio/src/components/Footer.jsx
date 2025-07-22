import React from "react";

function Footer() {
  return (
    <footer className="py-6 bg-gray-100 text-center text-gray-500 text-sm">
      <div>
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>

      <div className="flex justify-center gap-6 mt-4">
        {/* GitHub Link */}
        
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <img
            src="/icons8-github.gif"
            alt="GitHub"
            style={{ width: "24px", height: "24px" }}
          />
          GitHub
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <img
            src="/icons8-linkedin-50.png"
            alt="LinkedIn"
            style={{ width: "24px", height: "24px" }}
          />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
