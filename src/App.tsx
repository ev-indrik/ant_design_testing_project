import "./App.scss";
import "./index.scss";
import { ConfigProvider, Layout } from "antd";
import { theme } from "./themes";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Buttons from "./pages/Buttons/Buttons";
import Dropdowns from "./pages/Dropdown/Dropdowns";
import NotFound from "./pages/NotFoundPage";
import RadioBt from "./pages/RadioBt/RadioBt";

//layouts
import MainLayout from "./layouts/main_layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="buttons" element={<Buttons />} />
      <Route path="*" element={<NotFound />} />
      <Route path="dropdowns" element={<Dropdowns />} />
      <Route path="radiobt" element={<RadioBt />} />
    </Route>
  )
);

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Layout className={"appLayout"}>
        <RouterProvider router={router} />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
