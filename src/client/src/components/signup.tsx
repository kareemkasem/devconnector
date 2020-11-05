import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../store/actions/alerts";

function Signup(props: SignupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      props.setAlert("passwords don't match", "danger");
    } else {
      console.log("handle success here");
    }
  };

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={onChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={onChange}
            value={formData.email}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password1"
            minLength={6}
            onChange={onChange}
            value={formData.password1}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength={6}
            onChange={onChange}
            value={formData.password2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  );
}

export default connect(null, { setAlert })(Signup);

interface SignupProps {
  setAlert: typeof setAlert;
}

interface FormData {
  name: string;
  email: string;
  password1: string;
  password2: string;
}
