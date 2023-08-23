export default function SubscriptionsLink({ name, image, subscriptionCount }) {
  return (
    <li className="py-2 flex">
      <div className="w-[80%] flex">
        <span className="px-2">
          <img
            className="w-6 h-6 rounded-full"
            src={image}
            alt="Rounded avatar"
          />
        </span>
        <span>{name}</span>
      </div>

      <div className="w-[20%]">
        <span>{subscriptionCount}</span>
      </div>
    </li>
  );
}
