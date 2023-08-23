import Comment from "../Comment";

import { comments } from "../../data";

export default function CommentFeed() {
  return (
    <div className="bg-[#ffffff] grid-cols-start col-span-10">
      <div className="pt-8 pl-8">
        {comments.map((props) => (
          <Comment {...props} key={props.name + props.date} />
        ))}
      </div>
    </div>
  );
}
