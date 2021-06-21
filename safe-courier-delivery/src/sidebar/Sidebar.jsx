import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img
          src="https://images.pexels.com/photos/7706590/pexels-photo-7706590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum totam
          quis, sit numquam debitis iusto.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem"> Boxes</li>
          <li className="sidebarListItem">Gifts </li>
          <li className="sidebarListItem"> Food</li>
          <li className="sidebarListItem">Clothes </li>
          <li className="sidebarListItem">Large-items </li>
          <li className="sidebarListItem">Small-Items </li>
        </ul>
      </div>
      <div className="sidebaeItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
