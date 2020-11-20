import moment from "moment";
import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ExperienceType } from "../../global.types";

const AddExperience = ({ addExperience }: AddExperienceProps) => {
  const initialState: ExperienceType = {
    company: "",
    jobTitle: "",
    location: "",
    from: new Date(),
    to: undefined,
    current: false,
    description: "",
  };

  const [formData, setFormData] = useState<ExperienceType>(initialState);

  const {
    company,
    jobTitle,
    location,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.type === "date") {
      setFormData({
        ...formData,
        [e.currentTarget.name]: new Date(e.currentTarget.value),
      });
      return;
    }
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addExperience(formData);
    setFormData(initialState);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="* Job Title"
          name="title"
          value={jobTitle}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="* Company"
          name="company"
          value={company}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <h4>From Date</h4>
        <input
          type="date"
          name="from"
          value={moment(from).format("YYYY-MM-DD")}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <p>
          <input
            type="checkbox"
            name="current"
            checked={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
            }}
          />{" "}
          Current Job
        </p>
      </div>
      <div className="form-group">
        <h4>To Date</h4>
        <input
          type="date"
          name="to"
          value={moment(to).format("YYYY-MM-DD")}
          onChange={onChange}
          disabled={current}
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          cols={30}
          rows={5}
          placeholder="Job Description"
          value={description}
          onChange={onChange}
        />
      </div>
      <input type="submit" className="btn btn-primary my-1" />
    </form>
  );
};

export default AddExperience;

interface AddExperienceProps {
  addExperience: (experience: ExperienceType) => void;
}
