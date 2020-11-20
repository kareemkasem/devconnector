import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { EducationType, ExperienceType, ProfileType } from "../../global.types";
import { addEducation, addExperience } from "../../store/actions/profile";
import moment from "moment";
import AddExperience from "./create-experience";
import AddEducation from "./create-education";
import { AppState } from "../../store/configureStore";

function CreateProfile(props: createProfileProps) {
  const [formData, setFormData] = useState<ProfileType>({
    skills: [""],
    status: "",
    bio: "",
    company: "",
    githubusername: "",
    location: "",
    social: {},
    website: "",
    education: props.education,
    experience: props.experience,
  });

  const {
    skills,
    status,
    bio,
    company,
    githubusername,
    location,
    social,
    website,
    experience,
    education,
  } = formData;

  const [showAddExperience, setshowAddExperience] = useState<boolean>(false);
  const [showAddEducation, setshowAddEducation] = useState<boolean>(false);

  const toggleAddExperience = () => {
    setshowAddExperience(!showAddExperience);
  };

  const toggleAddEducation = () => {
    setshowAddEducation(!showAddEducation);
  };

  const addSkillField = () => {
    setFormData({ ...formData, skills: [...skills, ""] });
  };

  const onChangeSkills = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const modifiedSkills = skills.map((s, i) =>
      i === index ? e.currentTarget.value : s
    );
    setFormData({ ...formData, skills: modifiedSkills });
  };

  const removeSkill = (index: number) => () => {
    const modifiedSkills = skills.filter((val, ind) => ind !== index);
    setFormData({ ...formData, skills: modifiedSkills });
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (e.currentTarget.name.includes(".")) {
      const [obj, key] = e.currentTarget.name.split(".");
      //@ts-ignore
      const field = formData[obj];
      setFormData({
        ...formData,
        [obj]: { ...field, [key]: e.currentTarget.value },
      });
    } else {
      setFormData({
        ...formData,
        [e.currentTarget.name]: [e.currentTarget.value],
      });
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="large text-primary">Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Add some changes to your profile
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <h1>Skills: </h1>
        {skills.map((skill, index) => (
          <div className="form-group" style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Enter Skill"
              name="skills"
              value={skill}
              onChange={e => onChangeSkills(e, index)}
            />
            <button
              className="btn btn-danger"
              style={{ marginLeft: "5px" }}
              onClick={removeSkill(index)}
              type="button"
            >
              <strong>X</strong>
            </button>
          </div>
        ))}
        <button
          className="btn btn-secondary"
          onClick={addSkillField}
          type="button"
        >
          Add Skill
        </button>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <h1>Social:</h1>
        <div className="my-2">
          <div className="form-group social-input">
            <i className="fab fa-twitter fa-2x" />
            <input
              type="text"
              placeholder="Twitter URL"
              name="social.twitter"
              value={social?.twitter}
              onChange={onChange}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-youtube fa-2x" />
            <input
              type="text"
              placeholder="YouTube URL"
              name="social.youtube"
              value={social?.youtube}
              onChange={onChange}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-linkedin fa-2x" />
            <input
              type="text"
              placeholder="Linkedin URL"
              name="social.linkedin"
              value={social?.linkedIn}
              onChange={onChange}
            />
          </div>
        </div>

        <h1>Experience: </h1>
        <div style={{ display: "flex" }}>
          {experience?.map(exp => (
            <div className="boxed">
              <p>
                <strong>Job Title:</strong> {exp.jobTitle}
              </p>
              <p>
                <strong>Location:</strong> {exp.location}
              </p>
              <p>
                <strong>Company:</strong> {exp.company}
              </p>
              <p>
                <strong>Description:</strong> {exp.description}
              </p>
              <p>
                <strong>Started:</strong>{" "}
                {moment(exp.from).format("MMM DD YYYY")}
              </p>
              <p>
                <strong>Ended:</strong>{" "}
                {exp.current ? "no" : moment(exp.to).format("MMM DD YYYY")}
              </p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleAddExperience}
          className="btn btn-primary my-1"
        >
          {showAddExperience ? "Hide" : "Add"}
        </button>
        {showAddExperience ? (
          <AddExperience addExperience={props.addExperience} />
        ) : null}

        <h1>Education: </h1>
        <div style={{ display: "flex" }}>
          {education?.map(edu => (
            <div className="boxed">
              <p>
                <strong>Field:</strong> {edu.fieldOfStudy}
              </p>
              <p>
                <strong>School:</strong> {edu.school}
              </p>
              <p>
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p>
                <strong>Description:</strong> {edu.description}
              </p>
              <p>
                <strong>Started:</strong>{" "}
                {moment(edu.from).format("MMM DD YYYY")}
              </p>
              <p>
                <strong>Ended:</strong>{" "}
                {edu.current ? "no" : moment(edu.to).format("MMM DD YYYY")}
              </p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleAddEducation}
          className="btn btn-primary my-1"
        >
          {showAddEducation ? "Hide" : "Add"}
        </button>
        {showAddEducation ? (
          <AddEducation addEducation={props.addEducation} />
        ) : null}

        <div className="my-1">
          <button type="submit" className="btn btn-primary my-1">
            Save
          </button>
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  experience: state.profile.profile?.experience,
  education: state.profile.profile?.education,
});

export default connect(mapStateToProps, { addExperience, addEducation })(
  CreateProfile
);

interface createProfileProps {
  experience: ExperienceType[] | undefined;
  education: EducationType[] | undefined;
  addEducation: (education: EducationType) => void;
  addExperience: (experience: ExperienceType) => void;
}
