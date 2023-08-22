export default function SidebarLinkComponent({ text, icon }) {
  return (
    <li className="sidebar-link">
      <span className="px-2">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
