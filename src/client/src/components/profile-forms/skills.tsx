import React, { ChangeEvent } from "react";
import { ProfileType } from "../../global.types";

function Skills({
  formData,
  setFormData,
}: {
  formData: ProfileType;
  setFormData: (value: React.SetStateAction<ProfileType>) => void;
}) {
  const skills: string[] = formData.skills;

  const addSkillField = () => {
    setFormData({ ...formData, skills: [...skills, ""] });
  };

  const onChangeSkills = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const modifiedSkills = skills.map((s, i) =>
      i === index ? e.currentTarget.value : s
    );
    setFormData({ ...formData, skills: modifiedSkills });
  };

  const removeSkill = (index: number) => () => {
    const modifiedSkills = skills.filter((val, ind) => ind !== index);
    setFormData({ ...formData, skills: modifiedSkills });
  };

  return (
    <>
      <h1>Skills: </h1>
      {skills.map((skill, index) => (
        <div className="form-group" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Enter Skill"
            name="skills"
            value={skill}
            onChange={e => onChangeSkills(e, index)}
          />
          <button
            className="btn btn-danger"
            style={{ marginLeft: "5px" }}
            onClick={removeSkill(index)}
            type="button"
          >
            <strong>X</strong>
          </button>
        </div>
      ))}
      <button
        className="btn btn-secondary"
        onClick={addSkillField}
        type="button"
      >
        Add Skill
      </button>
    </>
  );
}

export default Skills;
