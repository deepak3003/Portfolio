import React from "react";

function Footer() {
  return (
    <footer className="py-6 bg-gray-100 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} YourName. All rights reserved.
    </footer>
  );
}

export default Footer;
