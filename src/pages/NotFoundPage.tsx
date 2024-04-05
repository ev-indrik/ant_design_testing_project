import { Col, Row } from "antd";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../media/cat_not_found.json";
import Title from "antd/es/typography/Title";
import { Content } from "antd/es/layout/layout";

export default function NotFound() {
  return (
    <Content>
      <Row justify={"center"}>
        <Col>
          <Title level={4}>Oops! This page does not exist</Title>
        </Col>
      </Row>
      <Row justify={"center"} align={"bottom"} style={{ padding: 50 }}>
        <Col span={5}>
          <Lottie animationData={animationData} />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col>
          <Title level={5}>
            Go to the <Link to="/">Homepage</Link>
          </Title>
        </Col>
      </Row>
    </Content>
  );
}
