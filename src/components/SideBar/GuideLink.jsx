export default function GuideLink({ text, icon }) {
  return (
    <li className="py-2">
      <span className="px-2">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
