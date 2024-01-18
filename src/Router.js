import { Route, BrowserRouter, Routes } from "react-router-dom";
import BlogsLists from "./Components/BlogsLists";
import BlogsDetails from "./Components/BlogsDetails";
import LayOut from "./Components/LayOut";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<BlogsLists />} />
            <Route path="/:id" element={<BlogsDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
