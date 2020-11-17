import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUserProfile } from "../../store/actions/profile";
import { AppState } from "../../store/configureStore";
import { AuthState } from "../../store/reducers/auth";
import { ProfileState } from "../../store/reducers/profile";

function DashBoard(props: DashBoardProps) {
  useEffect(() => props.getCurrentUserProfile(), []);
  return <h1>testing</h1>;
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
