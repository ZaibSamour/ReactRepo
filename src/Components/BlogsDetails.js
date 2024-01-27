import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostId } from "../Utils";
import "./Blogs.css";

const BlogsDetails = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    setPost(getPostId(id));
  }, []);
  return (
    <>
      {post && (
        <>
          <div className="container mt-5 ">
            <div className="row mt-5 mrgn-Title-Body-Blog-D">
              <h3 className="headingBlogDetail">{post.title}</h3>
            </div>

            <div className="row mt-1 mrgn-Title-Body-Blog-D">
              <p>{post.body}</p>
            </div>

            <div className="row mt-3 ">
              <div className="col imgRight">
                <button
                  type="button"
                  class="btn btn-primary "
                  onClick={() => navigate("/")}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default BlogsDetails;
