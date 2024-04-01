import {
  Button,
  DatePicker,
  Flex,
  Menu,
  MenuProps,
  MenuTheme,
  Switch,
} from "antd";
import "./App.css";
import { useState } from "react";
import { items } from "./helpers";

const App = () => {
  const [theme, setTheme] = useState<MenuTheme>("dark");
  const [current, setCurrent] = useState("1");

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div>
        <h1>AntDesign</h1>
        <DatePicker />

        <>
          <Switch
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <br />
          <br />
          <Menu
            theme={theme}
            onClick={onClick}
            style={{ width: 256 }}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </>
      </div>
      <div className="test">
        <p>Test Oops</p>
        <Flex gap="small" wrap="wrap">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
      </div>
    </>
  );
};

export default App;
