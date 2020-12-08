import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllProfiles } from "../../store/actions/profile";
import store, { AppState } from "../../store/configureStore";
import { ProfileType } from "../../global.types";
import { CLEAR_PROFILES } from "../../store/actions/action.types";
import ProfileItem from "./profile-item";
import { MoonLoader } from "react-spinners";

function Profiles({ getAllProfiles, profiles, loading }: ProfilesProps) {
  useEffect(() => {
    getAllProfiles();
    return () => {
      store.dispatch({ type: CLEAR_PROFILES });
    };
  }, [getAllProfiles]);

  return (
    <div>
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop" /> Browse and connect with
        developers
      </p>
      {loading || profiles.length === 0 ? (
        <div className="loader-page">
          <MoonLoader loading={true} size={100} color="#00A3B8" />;
        </div>
      ) : (
        <div className="profiles">
          {profiles.map(profile => (
            <ProfileItem key={profile._id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  profiles: state.profile.profiles,
  loading: state.profile.loading,
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);

interface ProfilesProps {
  getAllProfiles: VoidFunction;
  profiles: ProfileType[];
  loading: boolean;
}
