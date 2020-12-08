import moment from "moment";
import React from "react";
import { EducationType } from "../../global.types";

function ProfileEducation(props: { education: EducationType }) {
  const {
    school,
    degree,
    fieldOfStudy,
    to,
    from,
    description,
  } = props.education;
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        {moment(from).format("MMM DD YYYY")} -{" "}
        {to ? moment(to).format("MMM DD YYYY") : "Now"}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong> {fieldOfStudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
}

export default ProfileEducation;
