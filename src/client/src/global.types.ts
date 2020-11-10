export interface AlertType {
  id: string;
  msg: string;
  alertType: string;
}

export interface UserType {
  name: string;
  email: string;
  avatar: string;
  date: Date;
  id: string;
}

export interface ServerError {
  msg: string;
  value?: any;
  param?: string;
  location?: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface SignupParams extends LoginParams {
  name: string;
}
