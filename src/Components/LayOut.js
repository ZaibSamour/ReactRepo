import { Outlet } from "react-router-dom";
import "./Blogs.css";
import Footers from "./Footers";
const LayOut = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-1 img-1-pdg">
            <img
              src="https://shorturl.at/fuX19"
              className="img-1"
              alt=" Not found"
            />
          </div>
          <div className="col-8 navBar-pdg">
            <nav>
              <ul className="navBar-pdg navBar-pdg-Top">
                <b>
                  <li className="navBar-pdg">
                    work
                    <i class="fa fa-suitcase icn"></i>
                  </li>
                  <li>
                    services <i class="fa fa-cog fa-spin icn"></i>
                  </li>
                  <li>
                    about<i class="fa fa-heart icn"></i>
                  </li>
                </b>
              </ul>
            </nav>
          </div>

          <div className="col-3 imgRight pdgBlogtTab">
            <b>blogs</b>
            <i class="fa fa-comment  blog-h-color"></i>
            <button
              type="button"
              class="btn btn-primary float-right btnPlanner"
            >
              planner<i class="fa fa-leaf btn-planner-symblm"></i>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
      <Footers />
    </>
  );
};

export default LayOut;
