'use client';

import Link from 'next/link';

const Navbar = () => {
  // Function to handle smooth scrolling to an ID on the page
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#').pop();
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
        {/* Keymaker Logo */}
        <Link href="/" className="text-xl font-bold text-key-primary">
          Keymaker Studio
        </Link>
        
        {/* Navigation Links (SPA Sections + Blog) */}
        <nav className="hidden md:flex space-x-8 text-key-text">
          <a href="#solutions" onClick={handleScroll} className="hover:text-key-primary transition duration-150">Solutions</a>
          <a href="#reviews" onClick={handleScroll} className="hover:text-key-primary transition duration-150">Reviews</a>
          <a href="#faqs" onClick={handleScroll} className="hover:text-key-primary transition duration-150">FAQs</a>
          <Link href="/blog" className="hover:text-key-primary transition duration-150">Blog</Link>
        </nav>
        
        {/* CTA Button */}
        <a 
          href="#contact" 
          onClick={handleScroll}
          className="rounded-full bg-key-primary px-4 py-2 text-white hover:bg-opacity-90 transition duration-300 shadow-lg"
        >
          Work with us
        </a>
      </div>
    </header>
  );
};

export default Navbar;