import CommentBody from "./CommentBodyComponent";
import CommentHeaderComponent from "./CommentHeaderComponent";

export default function CommentComponent({ name, text, image }) {
  return (
    <div>
      <CommentHeaderComponent name={name} image={image} />
      <CommentBody text={text} />
    </div>
  );
}
