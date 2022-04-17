import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginApi } from "../api/loginapi";
import { loginContext } from "../context/loginContext";
import { useContext } from "react";

export default function NormalLoginForm() {
  const { loginDetails, dispatchLoginDetails } = useContext(loginContext);
  const onFinish = (values) => {
    loginApi(values, dispatchLoginDetails);
    if (loginDetails !== null) {
      if (loginDetails.error !== false) {
        window.alert("Missing email or password");
      }
    }
  };

  return (
    <div style={{ display: "Flex", margin: "auto" }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          //   rules={[
          //     {
          //       required: true,
          //       message: "Please input your Username!",
          //     },
          //   ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={
            [
              // {
              //   required: true,
              //   message: "Please input your Password!",
              // },
            ]
          }
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            color="rgb(2 48 71)"
            style={{ backgroundColor: "rgb(2 48 71)", width: "100%" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}
