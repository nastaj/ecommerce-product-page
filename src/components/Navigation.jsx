import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button type="button" onClick={handleToggle}>
        <img
          src="assets/images/icon-menu.svg"
          alt="Hamburger navigation menu button"
          className="h-5 translate-y-0.5"
        />
      </button>

      {isOpen && (
        <nav className="absolute top-0 left-0 p-6 h-screen w-3/5 bg-white z-10">
          <button className="mb-8" type="button" onClick={handleToggle}>
            <img
              src="assets/images/icon-close.svg"
              alt="Navigation menu close button"
            />
          </button>
          <ul>
            <li className="mb-3">
              <a className="font-bold text-lg" href="#" onClick={handleToggle}>
                Collections
              </a>
            </li>
            <li className="mb-3">
              <a className="font-bold text-lg" href="#" onClick={handleToggle}>
                Men
              </a>
            </li>
            <li className="mb-3">
              <a className="font-bold text-lg" href="#" onClick={handleToggle}>
                Women
              </a>
            </li>
            <li className="mb-3">
              <a className="font-bold text-lg" href="#" onClick={handleToggle}>
                About
              </a>
            </li>
            <li className="mb-3">
              <a className="font-bold text-lg" href="#" onClick={handleToggle}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navigation;
