import { Table, Space, Button, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUserList } from "./thunk";
import { setEmployee } from "./store/action";
import { useEffect } from "react";
import Spinner from "../Shared/spinner/Spinner";
import "./dashboard.css";

const { Title } = Typography;

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user, userLoader } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const columns = [
    {
      title: "First Name",
      width: 100,
      dataIndex: "firstname",
      key: "firstname",
      fixed: "left",
    },
    {
      title: "last Name",
      width: 100,
      dataIndex: "lastname",
      key: "lastname",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 110,
    },
    {
      title: "Contact No",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 100,
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => handleEditEmployee(record)}
            style={{ borderRadius: "4px" }}
          >
            Edit
          </Button>
          <Button
            type="danger"
            onClick={() => handleDeleteEmployee(record)}
            style={{ borderRadius: "4px" }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getUserList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddEmployee = () => {
    navigate("/employee-form");
  };

  const handleDeleteEmployee = (employee) => {
    dispatch(deleteUser(employee.email));
  };

  const handleEditEmployee = (employee) => {
    dispatch(setEmployee(employee));
    navigate(`/employee-form/update`);
  };
  return (
    <>
      {userLoader ? (
        <Spinner />
      ) : (
        <>
          <div className="dashboard-header-container">
            <Title className="dashboard-header">My Dashboard</Title>
            <Button
              size="large"
              className="dashboard-button"
              onClick={handleAddEmployee}
            >
              <PlusOutlined />
              Add Employee
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={user}
            rowKey={(record) => record._id}
            pagination={false}
            className="dashboard-table"
          />
        </>
      )}
    </>
  );
};
export default Dashboard;
