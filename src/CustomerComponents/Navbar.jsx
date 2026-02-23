import "../CustomerStyle/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌾 Prayogam</div>

      <div className="search-box">
        <input type="text" placeholder="Search Millets ?" />
        <span className="mic"><i class="fa-solid fa-microphone"></i></span>
      </div>

      <div className="nav-right">
        <select>
          <option>हिंदी</option>
          <option>English</option>
        </select>
        <div className="user">👤 2</div>
      </div>
    </nav>
  );
};

export default Navbar;