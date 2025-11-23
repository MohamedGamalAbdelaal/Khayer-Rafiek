import React from "react";
import Style from "./Login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const navigate=useNavigate()
  let {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const onSubmit =(data) => {
    // let response=await axios.post('http',data)
    console.log(data);
    toast.success('تم تسجيل الدخول')
    navigate('/home') 
  };
  return (
    <>
        
      <div className={`${Style.authContainer}`}>
        <div
          className={`${Style.bgOverlay} d-flex justify-content-center align-items-center  `}
        >
          <div
            className={`${Style.formContainer} w-50 h-50 bg-white rounded-3 p-3`}
          >
            <h3 className="text-success text-center mt-2">تسجيل الدخول</h3>
            <form action="" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control text-end"
                  placeholder="اسم المستخدم"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  {...register("user", { required: "ادخل اسم المستخدم" })}
                />
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
              </div>
              {errors.user && (
                <span className="text-danger d-block text-end">
                  {errors.user.message}
                </span>
              )}
              <div class="input-group mb-2">
                <input
                  type="password"
                  class="form-control text-end"
                  placeholder="كلمة المرور"
                  aria-label="كلمة المرور"
                  aria-describedby="basic-addon1"
                  {...register("password", { required: "ادخل الرقم السرى" })}
                />
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-key"></i>
                </span>
              </div>
              {errors.password && (
                <span className="text-danger d-block text-end">
                  {errors.password.message}
                </span>
              )}
              <div className="d-flex justify-content-center ">
                <button type="submit" className="btn btn-success px-5 mt-4">
                  دخول
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
