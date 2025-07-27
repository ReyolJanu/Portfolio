import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} Ignatious Reyol Janukshan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
