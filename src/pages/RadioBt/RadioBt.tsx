import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

const [value, setValue] = useState(1);
const onChange = (e: RadioChangeEvent) => {
  console.log("radio checked", e.target.value);
  setValue(e.target.value);
};

const RadioBt: React.FC = () => (
  <Radio.Group onChange={onChange} value={value}>
    <Radio value={1}>Sea</Radio>
    <Radio value={2}>Forest</Radio>
    <Radio value={3}>Park</Radio>
    <Radio value={4}>Montain</Radio>
  </Radio.Group>
);

export default RadioBt;
