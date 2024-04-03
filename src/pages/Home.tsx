import Lottie from "lottie-react";
import animationData from "../media/cat_animatiom_01.json";
import { Col, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";

const { Title, Text, Paragraph } = Typography;

export default function Home() {
  return (
    <Content>
      <Title level={1}>Welcome to Homepage</Title>
      <Paragraph>Lorem ipsum dolor sit</Paragraph>
      <Row justify={"center"}>
        <Col span={6}>
          <Lottie animationData={animationData} />
        </Col>
      </Row>
    </Content>
  );
}
