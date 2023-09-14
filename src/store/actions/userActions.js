import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const user_photo = createAction("user_photo", (obj) => {
  console.log(obj);
  return {
    payload: {
      photo: obj.photo,
    },
  };
});

export const user_login = createAsyncThunk("user_login", async (obj) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/auth/signin",
      obj.data
    );
    localStorage.setItem("token", data.response.token);
    localStorage.setItem("user", JSON.stringify(data.response.user));

    Swal.fire({
      title: "Welcome",
      text: data.message,
      icon: "success",
      confirmButtonText: "Ok",
    });

    return {
      user: data.response.user,
      token: data.response.token,
    };
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: error.response.data.message,
      icon: "error",
      confirmButtonText: "Ok",
    });

    return {
      user: null,
    };
  }
});

export const user_google = createAsyncThunk("user_google", async (obj) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/auth/google",
      obj.data
    );
    localStorage.setItem("token", data.response.token);
    localStorage.setItem("user", JSON.stringify(data.response.user));

    Swal.fire({
      title: "Welcome",
      text: data.message,
      icon: "success",
      confirmButtonText: "Ok",
    });

    return {
      user: data.response.user,
      token: data.response.token,
    };
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: error.response.data.message,
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
});

export const user_logout = createAction("user_logout", () => {

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Wanted city",
    showConfirmButton: false,
    timer: 1500,
  });

  return {
    payload: "",
  };
});

export const user_token = createAction("user_token", (user) => {
  return {
    payload: {
      user,
    },
  };
});
