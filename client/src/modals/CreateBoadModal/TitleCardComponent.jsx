import React, { useEffect, useState } from "react";
import * as style from "./Styled";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
import ChipComponent from "./ChipComponent";

const TitleCardComponent = (props) => {
  const { updateback, link } = props;
  const [memberInput, setMemberInput] = useState("");
  const [members, setMembers] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    updateback({
      title: title,
      backgroundImageLink: link,
      members: members,
    });
  }, [updateback, title, members, link]);

  const handleClick = () => {
    // Simulated data for demonstration purposes
    const newMember = { email: memberInput, name: memberInput }; // Simulating adding member from input
    if (!memberInput || members.some(member => member.email === memberInput)) return;

    setMembers([...members, newMember]);
    setMemberInput(""); // Clear input after adding member
  };

  const handleDelete = (email) => {
    const newMembers = members.filter((member) => member.email !== email);
    setMembers(newMembers);
  };

  return (
    <style.TitleCard>
      <style.Panel link={props.link}>
        <style.PanelWrapper>
          <style.TitleInput
            placeholder="Add board title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <style.MemberWrapper>
            <style.MemberInputWrapper>
              <style.MemberIcon>
                <GroupAddOutlinedIcon fontSize="small" />
              </style.MemberIcon>
              <style.MemberInput
                placeholder="Invite to board with email"
                value={memberInput}
                type="email"
                onChange={(e) => setMemberInput(e.target.value)}
              />
            </style.MemberInputWrapper>
            <style.AddButton onClick={handleClick}>
              <AddIcon fontSize="small" />
            </style.AddButton>
          </style.MemberWrapper>
          <style.CloseButton>
            <CloseOutlinedIcon
              fontSize="1rem"
              onClick={props.callback}
            />
          </style.CloseButton>
        </style.PanelWrapper>
        <style.ChipWrapper>
          {members.map((member) => (
            <ChipComponent
              key={member.email}
              callback={() => handleDelete(member.email)}
              {...member}
            />
          ))}
        </style.ChipWrapper>
      </style.Panel>
    </style.TitleCard>
  );
};

export default TitleCardComponent;
