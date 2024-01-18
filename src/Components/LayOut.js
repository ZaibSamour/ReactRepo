import { Outlet } from "react-router-dom";
import "./Blogs.css";
const LayOut = () => {
  return (
    <>
      <div className="container mt-1">
        <div className="row">
          <div className="col-6">
            <nav>
              <ul>
                <img
                  src="https://shorturl.at/fAGQZ"
                  className="img-1"
                  alt=" Not found"
                />
                <li>
                  work
                  <i class="fa fa-suitcase icn"></i>
                </li>
                <li>
                  services <i class="fab fa-whmcs icn"></i>
                </li>
                <li>
                  about<i class="fa fa-heart icn"></i>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-4"></div>
          <div className="col">
            <div className="row">
              <div className="col" style={{ marginTop: "8px" }}>
                <b>blogs</b>
              </div>
              <div className="col">
                <button className="btn">planner</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-4 ">
            <h1>
              The Mysterious “Land” of &nbsp;
              <b className="bold">Quantum Physics?</b>
            </h1>
            <h4>Physicists made the intangible almost tangible.</h4>
          </div>
          <div className="col-8 ">
            <img
              src="https://shorturl.at/HQTUV"
              className="img-2"
              alt=" Not found"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LayOut;
