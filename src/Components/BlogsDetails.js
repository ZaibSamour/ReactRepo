import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostId } from "../Utils";

const BlogsDetails = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setPost(getPostId(id));
  }, []);
  return (
    <>
      {post && (
        <>
          <h1>{post.title}</h1>

          <p>{post.detail}</p>

          <button
            style={{ marginLeft: "900px" }}
            type="button"
            class="btn btn-primary float-right"
            onClick={() => navigate("/")}
          >
            Go back
          </button>
        </>
      )}
    </>
  );
};
export default BlogsDetails;
