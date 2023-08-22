function CommentHeaderComponent({ name, image }) {
  return (
    <div>
      <img
        className="w-10 h-10 rounded-full"
        src={image}
        alt="Rounded avatar"
      />
      <h2>{name}</h2>
    </div>
  );
}

export default CommentHeaderComponent;
