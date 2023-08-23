import CommentFeed from "./CommentFeed";
import SidebarComponent from "./SideBar";

export default function HomeComponent() {
  return (
    <div className="grid grid-cols-12">
      <SidebarComponent />
      <CommentFeed />
    </div>
  );
}
