function NavBar({ src }) {
  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <a href="">
            <img src={src} alt="" className="logo" />
          </a>
        </div>
        <div className="listed-links">
          <a href="/" className="links">
            Home
          </a>
          <a href="/product" className="links">
            Product
          </a>
          <a href="" className="links">
            Contact
          </a>
          <a href="" className="links">
            About
          </a>
          <a href="" className="links">
            <i class="fa-solid fa-cart-shopping shopping-cart"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
