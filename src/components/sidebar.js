import "./sidebar.css"
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      </div>
    </>
  )
}

export default Sidebar;