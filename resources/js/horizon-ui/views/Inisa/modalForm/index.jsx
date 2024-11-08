// CustomModal.jsx
import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, title, bodyContent, footerButtons }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {bodyContent}
        </ModalBody>

        <ModalFooter>
          {footerButtons ? (
            footerButtons
          ) : (
            <Button colorScheme="blue" onClick={onClose}>
              Cerrar
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
