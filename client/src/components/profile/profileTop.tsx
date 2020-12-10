import React from "react";
import { ProfileType } from "../../global.types";

const ProfileTop = (props: { profile: ProfileType }) => {
  const { status, company, location, website, social, ...user } = props.profile;
  const { name, avatar } = user.user!;

  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        )}
        {social && social.twitter && (
          <a
            href={`https://www.twitter.com/${social.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        )}
        {social && social.linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${social.linkedIn}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        )}
        {social && social.youtube && (
          <a
            href={`https://www.youtube.com/user/${social.youtube}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube fa-2x" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
