import { Link } from "react-router-dom";
import { blogs_list } from "../Utils";

const BlogsLists = () => {
  return (
    <>
      <div className="container mt-3">
        {blogs_list.map((data) => (
          <div className="row mt-5">
            <div className="col-1"></div>

            <div className="col-10 listDiv">
              <h2>{data.title}</h2>
              <h5>{data.bofy}</h5>
              <Link to={"/" + data.id}> Veiw Detail</Link>
            </div>

            <div className="col-1"></div>
          </div>
        ))}
      </div>
    </>
  );
};
export default BlogsLists;
