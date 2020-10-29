import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

interface formData {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.nodeValue,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      console.log("handle error here");
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
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
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
