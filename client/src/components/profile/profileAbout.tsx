import React from "react";
import { ProfileType } from "../../global.types";

/* {profile: {
    bio,
    skills,
    user: { name },
  },
} */

function ProfileAbout(props: { profile: ProfileType }) {
  const { bio, skills, ...user } = props.profile;
  const name = user.user!.name;

  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <>
          <h2 className="text-primary">{name.trim().split(" ")[0]}s Bio</h2>
          <p>{bio}</p>
          <div className="line" />
        </>
      )}
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-check" /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileAbout;
