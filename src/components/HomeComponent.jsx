import FeedComponent from "./Feed/FeedComponent";
import SidebarComponent from "./Sidebar/SidebarComponent";

export default function HomeComponent() {
  return (
    <div className="grid grid-cols-12">
      <SidebarComponent />
      <FeedComponent />
    </div>
  );
}
