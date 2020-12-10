import { SET_ALERT } from "../store/actions/action.types";
import { ServerErrorType } from "../global.types";
import { v4 as uuid } from "uuid";
import store from "../store/configureStore";

const alertError = (error: any) => {
  const errorResponse: { errors: ServerErrorType[] } = error?.response?.data;

  errorResponse?.errors?.forEach((err: ServerErrorType) => {
    store.dispatch({
      type: SET_ALERT,
      payload: {
        id: uuid(),
        alertType: "danger",
        msg: err.msg,
      },
    });
  });
};

export default alertError;
