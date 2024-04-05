import { Col, Radio, RadioChangeEvent, Row } from "antd";
import Title from "antd/es/typography/Title";
import Lottie from "lottie-react";
import animationData from "../../media/travel_cat.json";
import { FC, useState } from "react";

const RadioBt: FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Row justify={"center"}>
        <Col>
          <Title level={5}>Where would you like to travel?</Title>
        </Col>
      </Row>
      <Row align={"middle"} justify={"center"}>
        <Col>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Sea</Radio>
            <Radio value={2}>Forest</Radio>
            <Radio value={3}>Park</Radio>
            <Radio value={4}>Montain</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={6}>
          <Lottie animationData={animationData} />
        </Col>
      </Row>
    </>
  );
};

export default RadioBt;
