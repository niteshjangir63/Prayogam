import "./Topbar.css"
export default function Topbar() {
  return (
    <header className="topbar">
      <h3>Farmer Dashboard</h3>
      <div className="Language">
        <select name="Language" id="Language">

          <option value="Hindi">हिंदी/Hindi</option>
          <option value="English">English</option>

        </select>
      </div>
      <div className="user">
        👨‍🌾 Welcome, <strong>User</strong>
      </div>
    </header>
  );
}