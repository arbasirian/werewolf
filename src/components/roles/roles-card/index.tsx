import React from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { CardContainer } from "./roles-card.styles";
import RolesModal from "../roles-modal";

const RolesCard: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <CardContainer onClick={open}>اسم بازیکن</CardContainer>

      <Modal opened={opened} onClose={close} title="نقش شما">
        {/* Modal content */}
        <RolesModal />
      </Modal>
    </>
  );
};

export default RolesCard;
