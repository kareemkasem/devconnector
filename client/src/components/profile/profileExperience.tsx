import moment from "moment";
import React from "react";
import { ExperienceType } from "../../global.types";

function ProfileExperience(props: { experience: ExperienceType }) {
  const {
    company,
    jobTitle,
    location,
    to,
    from,
    description,
  } = props.experience;

  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        {moment(from).format("MMM DD YYYY")} -{" "}
        {to ? moment(to).format("MMM DD YYYY") : "Now"}
      </p>
      <p>
        <strong>Position: </strong> {jobTitle}
      </p>
      <p>
        <strong>Location: </strong> {location}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
}

export default ProfileExperience;
