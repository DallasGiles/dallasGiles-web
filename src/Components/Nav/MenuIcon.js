import { FaBars, FaTimes } from "react-icons/fa";
import "./MenuIcon.css";

function MenuIcon({ clicked, setClicked }) {
  return (
    <button className="menuIcon" type="button" aria-label={clicked ? "Close navigation" : "Open navigation"} aria-expanded={clicked} onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <FaTimes className="menuIcon__icon" size={45} />
      ) : (
        <FaBars className="menuIcon__icon" size={45} />
      )}
    </button>
  );
}

export default MenuIcon;
