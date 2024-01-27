import { Route, BrowserRouter, Routes } from "react-router-dom";
import BlogsLists from "./Components/BlogsLists";
import BlogsDetails from "./Components/BlogsDetails";
import LayOut from "./Components/LayOut";
// import Banner from "./Components/Banner";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            {/* <Route path="/Banner" element={<Banner />} /> */}
            <Route index element={<BlogsLists />} />
            <Route path="/:id" element={<BlogsDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
