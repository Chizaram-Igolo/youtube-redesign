function CommentHeader({ name, date }) {
  return (
    <div className="flex text-[#1A70B2] gap-8">
      <div>
        <h2 className="text-xl">{name}</h2>
      </div>
      <div className="pt-[0.25rem]">
        <span className="text-sm text-[#92A9BB]">{date}</span>
      </div>
    </div>
  );
}

export default CommentHeader;
