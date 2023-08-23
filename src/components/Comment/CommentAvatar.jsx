export default function CommentAvatar({ image }) {
  return (
    <div>
      <img
        className="w-10 h-10 rounded-full"
        src={image}
        alt="Rounded avatar"
      />
    </div>
  );
}
