import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, RouteChildrenProps } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../store/actions/auth";
import { LoginParams } from "../../global.types";

function Login({ login, history }: LoginProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    const { email, password } = formData;
    e.preventDefault();
    login({ email, password });
    history.push("/dashboard");
  };

  return (
    <>
      <h1 className="large text-primary">Login</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Log into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={onChange}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength={6}
            onChange={onChange}
            value={formData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

export default connect(null, { login })(Login);

interface FormData {
  email: string;
  password: string;
}

interface LoginProps extends RouteChildrenProps {
  login: (loginParams: LoginParams) => void;
}
