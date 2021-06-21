import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/4393532/pexels-photo-4393532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">GIFTS</div>
          <div className="postCat">BOXES</div>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className="postDate">1h</span>
      </div>
    </div>
  );
}
