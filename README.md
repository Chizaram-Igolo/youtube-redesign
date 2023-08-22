# Project: Clone App - StackTrek Activity - 21/08/23

YouTube Redesign Clone based on Aurélien Salomon UX's design at https://dribbble.com/shots/1338727-Youtube-Redesign

**Candidate:** Chizaram Igolo

# Cloned Website

![SidebarLinkComponent](./public/youtube_redesign.png)

## Dissecting Activity

### `<SidebarHeaderComponent />`

![SidebarLinkComponent](./public/SidebarHeaderComponent.png)

```js
export default function ({ heading }) {
  return <div className="uppercase pl-2">{heading}</div>;
}
```

<br />

### `<SidebarLinkComponent />`

![SidebarLinkComponent](./public/SidebarLinkComponent.png)

```js
export default function SidebarLinkComponent({ text, icon }) {
  return (
    <li className="sidebar-link">
      <span className="px-2">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
```

<br />

### `<SidebarComponent />`

![SidebarLinkComponent](./public/SidebarComponent.png)

```js
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
```

## Skills demonstrated

- Proficiency with React
- Proficiency with HTML and CSS
- Using ES6 JavaScript

## Stack

- React
- Tailwind CSS
