export const action = "ACTION";
export type ActionType = {
  type: typeof action;
  payload: {
    id: string;
  };
};

export type AppActionTypes = ActionType | any;
