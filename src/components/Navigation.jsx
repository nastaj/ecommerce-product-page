import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const linkStyle = `hover:text-black hover:border-b-primary-orange
before:invisible before:hover:visible before:block before:absolute lg:before:top-[5.8rem] md:before:top-[4.8rem] before:h-1 before:bg-primary-orange before:scale-x-0 before:hover:scale-x-100 before:transition-all before:origin-left`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        className="order-first md:hidden"
      >
        <img
          src="assets/images/icon-menu.svg"
          alt="Hamburger navigation menu button"
          className="h-5 translate-y-0.5"
        />
      </button>

      <nav className="hidden md:block">
        <ul className="flex gap-4 text-base text-neutral-gray-1 xl:gap-8">
          <li className={`before:w-20 ${linkStyle}`}>
            <a href="#">Collections</a>
          </li>
          <li className={`before:w-8 ${linkStyle}`}>
            <a href="#">Men</a>
          </li>
          <li className={`before:w-14 ${linkStyle}`}>
            <a href="#">Women</a>
          </li>
          <li className={`before:w-12 ${linkStyle}`}>
            <a href="#">About</a>
          </li>
          <li className={`before:w-[3.8rem] ${linkStyle}`}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="absolute top-0 left-0 h-screen w-full z-[999] backdrop-brightness-[0.3]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className=" p-6 w-3/5 h-full bg-white">
              <button className="mb-8" type="button" onClick={handleToggle}>
                <img
                  src="assets/images/icon-close.svg"
                  alt="Navigation menu close button"
                />
              </button>
              <ul>
                <li className="mb-3">
                  <a
                    className="font-bold text-lg"
                    href="#"
                    onClick={handleToggle}
                  >
                    Collections
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="font-bold text-lg"
                    href="#"
                    onClick={handleToggle}
                  >
                    Men
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="font-bold text-lg"
                    href="#"
                    onClick={handleToggle}
                  >
                    Women
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="font-bold text-lg"
                    href="#"
                    onClick={handleToggle}
                  >
                    About
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="font-bold text-lg"
                    href="#"
                    onClick={handleToggle}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
