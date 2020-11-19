import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUserProfile } from "../../store/actions/profile";
import { AppState } from "../../store/configureStore";
import { AuthState } from "../../store/reducers/auth";
import { ProfileState } from "../../store/reducers/profile";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";

function DashBoard({ getCurrentUserProfile, auth, profile }: DashBoardProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getCurrentUserProfile(), []);

  const { user } = auth;
  const { loading } = profile;

  if (loading) {
    return (
      <div className="loader-page">
        <MoonLoader loading={true} size={100} color="#00A3B8" />;
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        {!profile ? (
          <>has</>
        ) : (
          <>
            <p>no profile info found.</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Get Started
            </Link>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentUserProfile })(DashBoard);

interface DashBoardProps {
  getCurrentUserProfile: VoidFunction;
  auth: AuthState;
  profile: ProfileState;
}
