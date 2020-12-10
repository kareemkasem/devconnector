import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUserProfile } from "../../store/actions/profile";
import { AppState } from "../../store/configureStore";
import { AuthState } from "../../store/reducers/auth";
import { ProfileState } from "../../store/reducers/profile";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";

function DashBoard({ getCurrentUserProfile, auth, profile }: DashBoardProps) {
  useEffect(() => getCurrentUserProfile(), [getCurrentUserProfile]);

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
        {profile ? (
          <div className="simple-flex">
            <p className="lead">
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            <Link to={`/profile/${user!._id}`} className="btn btn-secondary">
              View Profile
            </Link>
            <Link to="/create-profile" className="btn btn-secondary">
              Edit Profile
            </Link>
          </div>
        ) : (
          <div className="simple-flex">
            <p className="lead">no profile found 🤨</p>
            <Link to="/create-profile" className="btn btn-primary">
              create now !
            </Link>
          </div>
        )}
        <div
          style={{
            padding: "10px",
            fontSize: "1.5rem",
            margin: "20px 100px",
            background: "#FDFFC0",
            border: "3px solid #FDF0C0",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          under construction notifications zone 😃
        </div>
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
