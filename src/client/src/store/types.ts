export interface AlertType {
  id: string;
  msg: string;
  alertType: string;
}

export interface UserType {
  name: string;
  email: string;
  id: string;
}

export interface ServerError {
  msg: string;
  value?: any;
  param?: string;
  location?: string;
}
