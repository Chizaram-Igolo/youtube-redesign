import CommentComponent from "./CommentComponent";

const comments = [
  {
    name: "Mary Doe",
    date: "1 month ago",
    text: "This video presents some of the the top flyers of wingsuit proximity flying. Flying undiscovered lines in France and Switzerland. Follow me @maryDoeTweets.",
    likes: 12,
  },
  {
    name: "Laura Smith",
    date: "2 weeks ago",
    text: "Wow, this is awesome. Could you give me more information about the spot locations in France? These landscapes are truly amazing! Nice video.",
    likes: 0,
  },
];

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
