import React from "react";
import { Route } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";
import SideBar from "./sidebar";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/users" compnoent={Users} />
      <Route path="/admin/posts" compnoent={Posts} />
    </div>
  );
};

export default Dashboard;
