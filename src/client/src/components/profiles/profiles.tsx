import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllProfiles } from "../../store/actions/profile";
import store, { AppState } from "../../store/configureStore";
import { ProfileType } from "../../global.types";
import { CLEAR_PROFILES } from "../../store/actions/action.types";
import ProfileItem from "./profile-item";

function Profiles({ getAllProfiles, profiles }: ProfilesProps) {
  useEffect(() => {
    console.log("hi");
    getAllProfiles();
    return () => {
      setTimeout(() => store.dispatch({ type: CLEAR_PROFILES }), 30000);
    };
  }, [getAllProfiles]);

  return (
    <div>
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop" /> Browse and connect with
        developers
      </p>
      <div className="profiles">
        {profiles.length > 0 ? (
          profiles.map(profile => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  profiles: state.profile.profiles,
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);

interface ProfilesProps {
  getAllProfiles: VoidFunction;
  profiles: ProfileType[];
}
