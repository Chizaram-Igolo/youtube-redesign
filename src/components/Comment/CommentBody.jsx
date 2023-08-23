export default function CommentBodyComponent({ text }) {
  return (
    <div className="w-[80%] md:w-[60%]">
      <p>{text}</p>
    </div>
  );
}
