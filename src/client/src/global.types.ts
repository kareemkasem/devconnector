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

export interface BasicProfileType {
  bio?: string;
  githubusername?: string;
  company?: string;
  website?: string;
  location?: string;
  status: string;
  skills: string[];
  social?: { twitter?: string; linkedIn?: string; youtube?: string };
}

export interface ProfileType extends BasicProfileType {
  _id: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
  experience: {
    _id: string;
    jobTitle: string;
    company: string;
    location: string;
    from: Date;
    to?: Date;
    description?: string;
    current?: Boolean;
  }[];
  education: {
    _id: string;
    school: string;
    degree: string;
    fieldOfStudy: string;
    from: Date;
    to?: Date;
    description: string;
    current?: Boolean;
  }[];
}
