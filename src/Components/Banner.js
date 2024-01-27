import "./Blogs.css";
const Banner = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row mt-4 ">
          <div className="col-6 BannerTitle">
            <h1>
              <b className="fontbannerTitle">Articles for</b> &nbsp;
            </h1>
            <h1>
              <b className="bold">fornt-end devs</b>
            </h1>
            <p className="pdg-Below-Title">
              Articles on web performence, responsive design and more
            </p>
          </div>
          <div className="col-6">
            <img src="./image/image1.png" className="img-2" alt=" Not found" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
