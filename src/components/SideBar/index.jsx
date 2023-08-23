import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faHeart,
  faUserGroup,
  faList,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import GuideLink from "./GuideLink";
import GuideHeader from "./GuideHeader";

import { subscriptions } from "../../data";
import SubscriptionsLink from "./SubscriptionsLink";
import SubscriptionsHeader from "./SubscriptionsHeader";

const guideLinks = [
  { text: "Kenrick", icon: <FontAwesomeIcon icon={faUser} /> },
  { text: "To watch", icon: <FontAwesomeIcon icon={faGlobe} /> },
  { text: "Subscriptions", icon: <FontAwesomeIcon icon={faHeart} /> },
  { text: "Social", icon: <FontAwesomeIcon icon={faUserGroup} /> },
  { text: "History", icon: <FontAwesomeIcon icon={faList} /> },
  { text: "Watch later", icon: <FontAwesomeIcon icon={faClock} /> },
];

export default function Sidebar() {
  return (
    <div className="h-screen bg-[#272C2E] col-span-2 text-[#6A757D] font-medium">
      <div className="h-[50%] pt-8 px-3">
        <div className="py-2">
          <GuideHeader heading="Guide" />
        </div>
        {guideLinks.map((props) => (
          <GuideLink {...props} key={props.text} />
        ))}
      </div>

      <div className="h-[50%] px-3">
        <div className="py-2">
          <SubscriptionsHeader heading="Subscriptions" />
        </div>
        {subscriptions.map((props) => (
          <SubscriptionsLink {...props} key={props.name} />
        ))}
      </div>
    </div>
  );
}
