import { useState } from "react";
import "./login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
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
    <div className="container_login">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form_login">
          <div className="login-form-group">
            <Field name="email" className="form-field_login" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error_login"
            />
          </div>
          {/*Outro campo*/}
          <div className="form-group_login">
            <Field name="password" className="form-field_login" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error_login"
            />
          </div>

          <button className="button_login" type="submit">
            Login
          </button>
        </Form>
      </Formik>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <h1>Inscreva-se</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form_login">
          <div className="register-form-group_login">
            <Field name="email" className="form-field_login" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error_login"
            />
          </div>

          <div className="form-group_login">
            <Field name="password" className="form-field_login" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error_login"
            />
          </div>

          <div className="form-group_login">
            <Field
              name="confirmation"
              className="form-field_login"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error_login"
            />
          </div>

          <button className="button_login" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;