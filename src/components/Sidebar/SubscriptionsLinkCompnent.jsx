import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faClock,
  faHeart,
  faUserGroup,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  { text: "Kenrick", icon: <FontAwesomeIcon icon={faUser} /> },
  { text: "To watch", icon: <FontAwesomeIcon icon={faGlobe} /> },
  { text: "Subscriptions", icon: <FontAwesomeIcon icon={faHeart} /> },
  { text: "Social", icon: <FontAwesomeIcon icon={faUserGroup} /> },
  { text: "History", icon: <FontAwesomeIcon icon={faList} /> },
  { text: "Watch later", icon: <FontAwesomeIcon icon={faClock} /> },
];

function SideBarLink() {
  return (
    <div>
      {links.map((item) => (
        <li key={item.text}>
          {item.icon} {item.text}
        </li>
      ))}
    </div>
  );
}

export default SideBarLink;
