import { Divider, Radio, Table, TableColumnsType } from "antd";
import { FC, useState } from "react";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  pets: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Have pets",
    dataIndex: "pets",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    pets: "cats",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    pets: "cats, dog",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    pets: "cats",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
    pets: "fish",
  },
  {
    key: "5",
    name: "Tony Stark",
    age: 99,
    address: "Oslo No. 1 Lake Park",
    pets: "cats",
  },
  {
    key: "6",
    name: "Robert Krasovsky",
    age: 99,
    address: "London No. 1 Lake Park",
    pets: "cats",
  },
  {
    key: "7",
    name: "Robert Krasovsky",
    age: 99,
    address: "London No. 1 Lake Park",
    pets: "cats",
  },
  {
    key: "8",
    name: "Robert Krasovsky",
    age: 99,
    address: "London No. 1 Lake Park",
    pets: "cats",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const Tables: FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Tables;
