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

export interface ProfileType {
  _id: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
  bio?: String;
  githubusername?: String;
  company?: String;
  website?: String;
  location?: String;
  status: String;
  skills: String[];
  experience: {
    _id: string;
    jobTitle: String;
    company: String;
    location: String;
    from: Date;
    to?: Date;
    description?: String;
    current?: Boolean;
  }[];
  education: {
    _id: string;
    school: String;
    degree: String;
    fieldOfStudy: String;
    from: Date;
    to?: Date;
    description: String;
    current?: Boolean;
  }[];
  social?: { twitter?: String; linkedIn?: String; youtube?: String };
}
