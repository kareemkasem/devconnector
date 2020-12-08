import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ProfileType, UserType } from "../../global.types";
import { AppState } from "../../store/configureStore";
import { getProfileById } from "../../store/actions/profile";
import { MoonLoader } from "react-spinners";

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
        <>{profile.status}</>
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
