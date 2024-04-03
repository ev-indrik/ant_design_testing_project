import "./App.scss";
import "./index.scss";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Buttons from "./pages/Buttons";

//layouts
import MainLayout from "./layouts/main_layout";
import { ConfigProvider, Layout } from "antd";
import { theme } from "./themes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="buttons" element={<Buttons />} />
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
