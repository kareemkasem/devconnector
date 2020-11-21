import moment from "moment";
import React from "react";
import { useState } from "react";
import { EducationType, ExperienceType, ProfileType } from "../../global.types";
import AddEducation from "./add-education";
import AddExperience from "./add-experience";

function ExperienceAndEducation({
  formData,
  setFormData,
}: {
  formData: ProfileType;
  setFormData: (value: React.SetStateAction<ProfileType>) => void;
}) {
  const { education, experience } = formData;

  const [showAddExperience, setshowAddExperience] = useState<boolean>(false);
  const [showAddEducation, setshowAddEducation] = useState<boolean>(false);

  const toggleAddExperience = () => {
    setshowAddExperience(!showAddExperience);
  };

  const toggleAddEducation = () => {
    setshowAddEducation(!showAddEducation);
  };

  const submitExperience = (exp: ExperienceType) => {
    const modifiedExperience = [...experience, exp];
    setFormData({ ...formData, experience: modifiedExperience });
  };

  const submitEducation = (edu: EducationType) => {
    const modifiedEducation = [...education, edu];
    setFormData({ ...formData, education: modifiedEducation });
  };
  return (
    <>
      <h1>Experience: </h1>
      <div style={{ display: "flex" }}>
        {
          //@ts-ignore
          experience.map((exp, index) => (
            <div className="boxed" key={index}>
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
          ))
        }
      </div>
      <button
        type="button"
        onClick={toggleAddExperience}
        className="btn btn-primary my-1"
      >
        {showAddExperience ? "Hide" : "Add"}
      </button>
      {showAddExperience ? (
        <AddExperience submitter={submitExperience} />
      ) : null}

      <h1>Education: </h1>
      <div style={{ display: "flex" }}>
        {
          //@ts-ignore
          education.map((edu, index) => (
            <div className="boxed" key={index}>
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
          ))
        }
      </div>
      <button
        type="button"
        onClick={toggleAddEducation}
        className="btn btn-primary my-1"
      >
        {showAddEducation ? "Hide" : "Add"}
      </button>
      {showAddEducation ? <AddEducation submitter={submitEducation} /> : null}
    </>
  );
}

export default ExperienceAndEducation;
