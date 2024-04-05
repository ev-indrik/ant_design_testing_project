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
import Tables from "./pages/Tables/Tables";
import Carousels from "./pages/Carousels/Carousels";
import TabsFeature from "./pages/Tabs/TabsFeature";

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
      <Route path="tables" element={<Tables />} />
      <Route path="carousels" element={<Carousels />} />
      <Route path="tabsFeature" element={<TabsFeature />} />
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
