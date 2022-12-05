const PostItem = (props) => {
  // props => { id: x, title: xxx, body: xxxxx }
  console.log(props);
  const { post } = props;
  // post => { id: x, title: xxx, body: xxxxx }

  return (
    <div className="PostItem">
      <div>
        <span className="id">NO. {post.id} </span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body}</p>
    </div>
  );
};

export default PostItem;
