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

export interface EducationType {
  school: string;
  degree: string;
  fieldOfStudy: string;
  from: Date;
  to?: Date;
  description: string;
  current?: boolean;
}

export interface ExperienceType {
  jobTitle: string;
  company: string;
  location: string;
  from: Date;
  to?: Date;
  description?: string;
  current?: boolean;
}

export interface ProfileType {
  bio?: string;
  githubusername?: string;
  company?: string;
  website?: string;
  location?: string;
  status: string;
  skills: string[];
  social?: { twitter?: string; linkedIn?: string; youtube?: string };
  experience: ExperienceType[];
  education: EducationType[];
}

interface ExtendedProfileType extends ProfileType {
  user: {
    name: string;
    avatar: string;
  };
}
