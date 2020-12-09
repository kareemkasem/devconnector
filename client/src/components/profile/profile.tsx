import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { ProfileType, UserType } from "../../global.types";
import { AppState } from "../../store/configureStore";
import { getProfileById } from "../../store/actions/profile";
import { MoonLoader } from "react-spinners";
import ProfileExperience from "./profileExperience";
import ProfileEducation from "./profileEducation";
import ProfileTop from "./profileTop";
import ProfileAbout from "./profileAbout";
import ProfileGithubRepos from "./profileGithubRepos";

function Profile({
  getProfileById,
  profile,
  isAuth,
  currentUser,
  loading,
  match,
}: ProfileProps) {
  const userId = match.params.userId;

  useEffect(() => getProfileById(userId), [getProfileById, userId]);

  return (
    <div>
      {!profile || loading ? (
        <div className="loader-page">
          <MoonLoader loading={true} size={100} color="#00A3B8" />;
        </div>
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {isAuth && currentUser.id === profile.user!._id && (
            <Link to="/create-profile" className="btn btn-dark">
              Edit Profile
            </Link>
          )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map(experience => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map(education => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

            {profile.githubusername && (
              <ProfileGithubRepos username={profile.githubusername} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  profile: state.profile.profile!,
  isAuth: state.auth.isAuthenticated,
  currentUser: state.auth.user!,
  loadig: state.profile.loading,
});

export default withRouter(
  connect(mapStateToProps, { getProfileById })(Profile)
);

interface ProfileProps extends RouteComponentProps<{ userId: string }> {
  getProfileById: (profileId: string) => void;
  profile: ProfileType;
  loading: boolean;
  isAuth: boolean;
  currentUser: UserType;
}
