import CommentAvatar from "./CommentAvatar";
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader.jsx";

// export default function CommentComponent({ name, text, image }) {
//   return (
//     <div>
//       <CommentHeaderComponent name={name} image={image} />
//       <CommentBody text={text} />
//     </div>
//   );
// }

export default function Comment({ name, image, text, date }) {
  return (
    <>
      <div className="flex gap-4 pb-8">
        <div>
          <CommentAvatar image={image} />
          <div className="w-1 h-[100%] border-l-2 border-[#F5F5F6] mx-auto"></div>
        </div>
        <div>
          <CommentHeader name={name} date={date} />
          <CommentBody text={text} />
        </div>
      </div>
    </>
  );
}
