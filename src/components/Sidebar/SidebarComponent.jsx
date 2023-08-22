import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faHeart,
  faUserGroup,
  faList,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import SidebarLinkComponent from "./SidebarLinkComponent";
import SidebarHeaderComponent from "./SidebarHeaderComponent";

const sidebarLinks = [
  { text: "Kenrick", icon: <FontAwesomeIcon icon={faUser} /> },
  { text: "To watch", icon: <FontAwesomeIcon icon={faGlobe} /> },
  { text: "Subscriptions", icon: <FontAwesomeIcon icon={faHeart} /> },
  { text: "Social", icon: <FontAwesomeIcon icon={faUserGroup} /> },
  { text: "History", icon: <FontAwesomeIcon icon={faList} /> },
  { text: "Watch later", icon: <FontAwesomeIcon icon={faClock} /> },
];

export default function SidebarComponent() {
  return (
    <div className="bg-[#272C2E] col-span-2">
      <SidebarHeaderComponent heading="Guide" />
      {sidebarLinks.map(({ text, icon }) => (
        <SidebarLinkComponent text={text} icon={icon} key={text} />
      ))}
    </div>
  );
}
