import React from "react";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/login";
import { Redirect } from "react-router-dom";

function ListPages() {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const loading = useSelector((state) => state.login.loading);
  const errors = useSelector((state) => state.login.errors);
  console.log("loading", loading);
  console.log("error", errors);
  console.log("isAuthenticated", isAuthenticated);

  const dispatch = useDispatch();
  const fetchUser = (email, pwd) => {
    dispatch(actions.fetchUser(email, pwd));
  };
  return (
    <div>
      <Login fetchUser={fetchUser} />

      {isAuthenticated ? <Redirect to="/home" /> : <div>Waiting..</div>}
    </div>
  );
}

export default ListPages;
