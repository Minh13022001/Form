import React, { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { useRecoilState } from "recoil";
import { close_Modal, table_record } from "./state_management/ato";
const { Option } = Select;

const api_url = "https://kpi.bsejsc.com.vn/public/mock-api/variable.json";

let globaldata = [];
async function getapi(url) {
  const response = await fetch(url);
  let data = await response.json();

  globaldata = data.extra.option.type;
  console.log(globaldata);

}
getapi(api_url);


const Modl = () => {
  const [showModal, setShowModal] = useState(false);

  const [dataSource, setDatasource] = useRecoilState(table_record);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const formRef = React.createRef();

  const handleFormSubmit = (values) => {
    console.log("Form valueee:", values);

    setShowModal(false);

    const newRecord = { ...values };

    setDatasource((prev) => {
      return [...prev, newRecord];
    });
  };


  return (
    <>
      <Button type="primary" onClick={handleButtonClick}>
        Open Modal
      </Button>
      <Modal
        title="My Modal"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form onFinish={handleFormSubmit}>
          <Form.Item
            name="id"
            label="Uid"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="value"
            label="Value"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {globaldata.map((item) => (
                <Option key={item.value} value={item.label}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            {
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            }
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Modl;




