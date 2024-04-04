import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import Title from "antd/es/typography/Title";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        To Live
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        To Love
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        To Fight
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "To Desire",
  },
];

const Dropdowns: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <Title level={5}>Hover to see more</Title>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default Dropdowns;
