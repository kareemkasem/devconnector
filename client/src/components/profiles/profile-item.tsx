import React from "react";
import { Link } from "react-router-dom";
import { ProfileType } from "../../global.types";

const ProfileItem = ({ profile }: ProfileItemProps) => {
  const { user, status, company, location, skills } = profile;
  const { name, avatar } = user!;
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${user!._id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(1, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProfileItemProps {
  profile: ProfileType;
}

export default ProfileItem;
