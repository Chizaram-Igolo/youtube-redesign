import CommentComponent from "./CommentComponent";

import { comments } from "../../data";

export default function CommentSection() {
  return (
    <div>
      {comments.map(({ name, date, text, likes }) => (
        <CommentComponent
          name={name}
          date={date}
          text={text}
          likes={likes}
          key={name}
        />
      ))}
    </div>
  );
}
