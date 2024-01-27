import { Link } from "react-router-dom";
import { blogs_list } from "../Utils";
import Banner from "./Banner";
import "./Blogs.css";
import { useState } from "react";

const BlogsLists = () => {
  const [flagDelPost, setFlagDelPost] = useState(true);
  const [yesNo, setYesNo] = useState(false);
  const [listOfBlogs, setListOfBlogs] = useState(blogs_list);
  const [postId, setPostId] = useState(blogs_list);

  const [addPostBtnFlag, setAddPostBtnFlag] = useState(true);
  const [addPostDetailFlag, setAddPostDetailFlag] = useState(false);

  const postDelete = (id) => {
    setListOfBlogs(listOfBlogs.filter((blog) => blog.id !== id));
  };

  const whichPostDelete = (id) => {
    setPostId(listOfBlogs.filter((blog) => blog.id === id));
  };
  console.log("Blog id : ", postId[0].id);
  // -----------------Add post detail-------
  const [userId, setUserId] = useState();
  const [newPostId, setNewPostId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  //const [newPostObj, setNewPostObj] = useState();

  const addPost_to_postList = (e) => {
    e.preventDefault();
    let _object = {
      userId: userId,
      id: newPostId,
      title: title,
      body: body,
    };
    setAddPostBtnFlag(true);
    setAddPostDetailFlag(false);
    let _array = [...listOfBlogs];
    _array.unshift(_object);
    setListOfBlogs([..._array]);
  };
  // listOfBlogs.push(newPostObj);
  return (
    <>
      <Banner />
      <div className="container mt-2">
        {/* -----------------Add post section---------------------- */}
        <div className="row">
          <div className="col">
            {addPostBtnFlag && (
              <button
                type="button"
                className="btn btn-primary btn-AddPost"
                onClick={() => {
                  setAddPostBtnFlag(false);
                  setAddPostDetailFlag(true);
                }}
              >
                Add New Post
              </button>
            )}
            {addPostDetailFlag && (
              <div className="col">
                <h4 className="form">Add post details</h4>
                {/* -------------------add post form -----------------------------*/}
                <form className="form" onSubmit={(e) => addPost_to_postList(e)}>
                  <label for="fname">User Id:</label>
                  <br />
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="Enter user id"
                    userId={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                  <br />
                  <label for="fname">Id:</label>
                  <br />
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="Enter id"
                    newPostId={newPostId}
                    onChange={(e) => setNewPostId(e.target.value)}
                  />
                  <br />
                  <label for="fname">Title;</label>
                  <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter title"
                    title={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br />
                  <label for="w3review">Body:</label>
                  <br />
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="20"
                    placeholder="Enter description"
                    body={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <br />
                  <button type="submit" className="btn btn-primary btn-Delete">
                    Add to Posts
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        {/* ---------------add post end----------------       */}
        {listOfBlogs.map((data) => (
          <div className="row mt-5">
            <div className="col-2"></div>
            <div className="col-8 listDiv">
              <p className="dateName">
                25 th May 2024&emsp; Aurangzaib &emsp; seen &nbsp;
                <i class="fa fa-check-circle checkSymbl"></i>
              </p>
              <h4>
                <b>
                  {data.id}:&emsp;{data.title}
                </b>
              </h4>
              <p>{data.body}</p>
              <Link to={"/" + data.id}> Veiw Detail</Link>
              {flagDelPost && (
                <button
                  type="button"
                  className="btn btn-primary btn-Delete"
                  onClick={() => {
                    setFlagDelPost(false);
                    setYesNo(true);
                    whichPostDelete(data.id);
                  }}
                >
                  Delete Post
                </button>
              )}
              {/* -----------Confirmation button for deleting post------- */}
              {yesNo && data.id == postId[0].id && (
                <>
                  <b className="msg">Are you sure to delete post?</b>
                  <button
                    type="button"
                    className="btn btn-primary yes-btn"
                    onClick={() => {
                      postDelete(data.id);
                      setFlagDelPost(true);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary no-btn"
                    onClick={() => {
                      setYesNo(false);
                      setFlagDelPost(true);
                    }}
                  >
                    No
                  </button>
                </>
              )}
              {/* ----------end--------------- */}
            </div>
            <div className="col-2"> </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default BlogsLists;
