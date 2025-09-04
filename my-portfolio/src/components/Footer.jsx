import React from "react";

function Footer() {
  return (
    <footer className="py-6  text-center text-sm bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <div>
        &copy; {new Date().getFullYear()} Deepak Singh. All rights reserved.
      </div>

      
    </footer>
  );
}

export default Footer;
