import "./Blogs.css";
const Footers = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row mt-5">
          <div className="col-6 imgRight footerFont">
            <h4>
              <b>Looking for&nbsp;</b>
              <b className="bold">more</b>
              <b>?</b>
            </h4>
          </div>
          <div className="col-6">
            <button className=" btnFooter">
              <b>
                archive <i class="fa fa-caret-right "></i>
              </b>
            </button>
          </div>
        </div>
        <div className="row mt-5 pdgFooter">
          <div className="col-11 btnAlign ">
            <i className="fa fa-twitter symols-Footer "></i>
            <i class="fa fa-support symols-Footer mrgn-symlm-footer"></i>
            <i class="fa fa-camera-retro symols-Footer mrgn-symlm-footer"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footers;
