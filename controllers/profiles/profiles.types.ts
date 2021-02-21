export type profileReqBody = {
  bio?: String;
  githubusername?: String;
  company?: String;
  website?: String;
  location?: String;
  status: String;
  skills: String[];
  experience: {
    jobTitle: String;
    company: String;
    location: String;
    from: Date;
    to?: Date;
    description?: String;
    current?: Boolean;
  }[];
  education: {
    school: String;
    degree: String;
    fieldOfStudy: String;
    from: Date;
    to?: Date;
    description: String;
    current?: Boolean;
  }[];
  social?: { twitter?: String; linkedIn?: String; youtube?: String };
};
