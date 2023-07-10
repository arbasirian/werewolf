import { Button } from "@mantine/core";
import React from "react";

import godfatherImage from "assets/godFather.jpg";
import {
  RolesImageModal,
  RolesModalContainer,
  RolesModalContent,
  RolesTitle
} from "./roles-modal.styles";

const RoleModal: React.FC = () => {
  return (
    <RolesModalContainer>
      <RolesImageModal src={godfatherImage} alt="" />
      <RolesModalContent>
        <RolesTitle>پدر خوانده</RolesTitle>
      </RolesModalContent>
      <RolesModalContent>
        <div>در ساید مافیا بازی می کند</div>
      </RolesModalContent>
      <Button>متوجه شدم !</Button>
    </RolesModalContainer>
  );
};

export default RoleModal;
