function Header({ children }) {
  return (
    <header className="p-6 relative flex items-center justify-between">
      {children}
    </header>
  );
}

export default Header;
