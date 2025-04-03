const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-wrap justify-between items-center gap-5">
      <div className="text-white-500 flex gap-2 text-sm md:text-base">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/Sahil2510" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-8 md:h-8">
          <img src="/assets/github.svg" alt="GitHub" className="w-full h-full object-contain" />
        </a>
        <a href="https://www.linkedin.com/in/sahilll/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-8 md:h-8">
          <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-full h-full object-contain" />
        </a>
      </div>

      <p className="text-white-500 text-sm md:text-base">© 2025 Sahil Chavan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
