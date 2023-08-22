import CommentBody from "./CommentBody";

export default function CommentComponent({ text }) {
  return (
    <div>
      <CommentBody text={text} />
    </div>
  );
}
