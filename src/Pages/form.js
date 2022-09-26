import { Form, Input, Typography, Button } from "antd";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser } from "./thunk";
import Spinner from "../Shared/spinner/Spinner";

const { Title } = Typography;

const EmployeeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  const isUpdate =
    location?.pathname === "/employee-form/update" ? true : false;
  console.log(isUpdate, location);

  const { employee, formLoader } = useSelector((state) => state.user);

  const [form] = Form.useForm();

  const [btnText, setBtnText] = useState("Submit");

  const initialValues = {
    firstname: "",
    lastname: "",
    age: null,
    email: "",
    phoneNumber: null,
    password: "",
  };

  useEffect(() => {
    if (!isUpdate) {
      form.setFieldsValue(initialValues);
    } else {
      setBtnText("Update");
      form.setFieldsValue({
        firstname: employee.firstname,
        lastname: employee.lastname,
        phoneNumber: employee.phoneNumber,
        email: employee.email,
        age: employee.age,
        password: employee.password,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employee, form]);

  const onFinish = () => {
    form.resetFields();
    navigate("/dashboard");
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Title
        style={{
          textAlign: "center",
          color: "#d46b08",
          paddingTop: "20px",
          textShadow: "3px 4px 8px rgba(81,67,21,0.6)",
          fontWeight: "700",
        }}
      >
        Employee Form
      </Title>
      {formLoader ? (
        <Spinner />
      ) : (
        <Form
          form={form}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          layout="horizontal"
          onFinish={(fieldsValue) => {
            isUpdate
              ? dispatch(
                  updateUser(
                    { ...fieldsValue, password: employee.password },
                    onFinish
                  )
                )
              : dispatch(addUser(fieldsValue, onFinish));
          }}
          initialValues={initialValues}
          style={{
            margin: "10px auto",
            backgroundColor: "#fff7e6",
            padding: "40px 20px 10px",
            width: "50%",
            borderRadius: "10px",
          }}
        >
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            updateEmployee
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contact No"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your Contact No!" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          {!isUpdate && (
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input />
            </Form.Item>
          )}
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input your Age!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 9 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                marginRight: "10px",
                borderRadius: "5px",
                backgroundColor: "#fa541c",
                border: "none",
              }}
            >
              {btnText}
            </Button>
            <Button
              danger
              size="large"
              onClick={handleCancel}
              style={{ borderRadius: "5px" }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default EmployeeForm;
