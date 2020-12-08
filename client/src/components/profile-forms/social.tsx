import React from "react";
import { ChangeEvent } from "react";
import { ProfileType } from "../../global.types";

function Social({
  formData,
  setFormData,
}: {
  formData: ProfileType;
  setFormData: (value: React.SetStateAction<ProfileType>) => void;
}) {
  const social = formData.social;

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const [obj, key] = e.currentTarget.name.split(".");
    //@ts-ignore
    const field = formData[obj];
    setFormData({
      ...formData,
      [obj]: { ...field, [key]: e.currentTarget.value },
    });
  };

  return (
    <>
      <h1>Social:</h1>
      <div className="my-2">
        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x" />
          <input
            type="text"
            placeholder="Twitter URL"
            name="social.twitter"
            value={social?.twitter}
            onChange={onChange}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x" />
          <input
            type="text"
            placeholder="YouTube URL"
            name="social.youtube"
            value={social?.youtube}
            onChange={onChange}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x" />
          <input
            type="text"
            placeholder="Linkedin URL"
            name="social.linkedin"
            value={social?.linkedIn}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

export default Social;
