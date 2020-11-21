import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ProfileType } from "../../global.types";
import { AppState } from "../../store/configureStore";
import {
  createOrUpdateProfile,
  getCurrentUserProfile,
} from "../../store/actions/profile";
import ExperienceAndEducation from "./expirenceAndEducation";
import Skills from "./skills";
import Social from "./social";
import { MoonLoader } from "react-spinners";

function CreateProfile({
  profileData,
  profileLoading,
  createOrUpdateProfile,
  getCurrentUserProfile,
}: createProfileProps) {
  useEffect(() => {
    getCurrentUserProfile();
  }, [getCurrentUserProfile]);

  const [formData, setFormData] = useState<ProfileType>(
    profileData
      ? profileData
      : {
          skills: [""],
          status: "",
          bio: undefined,
          company: undefined,
          githubusername: undefined,
          location: undefined,
          social: {
            youtube: undefined,
            linkedIn: undefined,
            twitter: undefined,
          },
          website: undefined,
          education: [],
          experience: [],
        }
  );

  useEffect(() => {
    if (profileData) setFormData(profileData);
  }, [profileData]);

  if (profileLoading) {
    return (
      <div className="loader-page">
        <MoonLoader loading={true} size={100} color="#00A3B8" />;
      </div>
    );
  }

  const { status, bio, company, githubusername, location, website } = formData;

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: [e.currentTarget.value],
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    createOrUpdateProfile(formData);
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

        <Skills formData={formData} setFormData={setFormData} />

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

        <Social formData={formData} setFormData={setFormData} />

        <ExperienceAndEducation formData={formData} setFormData={setFormData} />

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
  profileData: state.profile.profile,
  profileLoading: state.profile.loading,
});

export default connect(mapStateToProps, {
  createOrUpdateProfile,
  getCurrentUserProfile,
})(CreateProfile);

interface createProfileProps {
  profileData: ProfileType | null;
  getCurrentUserProfile: VoidFunction;
  createOrUpdateProfile: (data: ProfileType) => void;
  profileLoading: boolean;
}
