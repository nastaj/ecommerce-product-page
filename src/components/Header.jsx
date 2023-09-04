function Header({ children }) {
  return (
    <header className="p-6 lg:p-8 lg:mx-16 xl:mx-48 lg:px-0 relative flex items-center justify-between md:mb-8 md:border-b md:border-b-neutral-gray-2">
      {children}
    </header>
  );
}

export default Header;
