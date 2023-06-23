import { useState } from "react";
import "./login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";




function Login() {
    const navigate = useNavigate();
   
  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        console.log(response.data); // verifique se o token está presente aqui
        alert(response.data.msg);
        return response.data;
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        if (data.msg === "Utilizador conectado") { // adiciona essa linha
          navigate("/dashboard");
        }
      })
      .catch((err) => console.error(err));
  };
    

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });

    

  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });
  return (
    <div className="main_container">

      <div className="wavyComp">

      </div>

      <div className="form_container">

        <p className="title_login">Iniciar sessão com a sua conta</p>

        <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="loginForm">

          <label className="formLabel">Email</label><br />
          <Field name="email" type="text" className="formInput"  /><br />
          
          <label className="formLabel">Password</label><br />
          <Field type="password" name="password" className="formInput"/><br />
          

         <button className="formInput" type="submit">
         Iniciar Sessão
          </button>

          </Form>
        </Formik>
      </div>

    </div>
  );
}

export default Login;