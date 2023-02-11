import React from "react";
import { Modal, Button, Text, Flex } from "native-base";

const RemoveRegister = ({
  infoRemove,
  showConfirm,
  onCloseRemoveModal,
  submitRemove,
}) => {
  return (
    <>
      <Modal isOpen={showConfirm} onClose={onCloseRemoveModal}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Remove</Modal.Header>
          <Modal.Body>
            <Text color="coolGray.800" mt="3">
              Are you sure you want to delete this record?
            </Text>
            <Text color="coolGray.800" mt="3" fontWeight="medium">
              {infoRemove.concept}
            </Text>

            <Flex direction="row-reverse" mb="2" mt="5">
              <Button
                onPress={submitRemove}
                variant="subtle"
                colorScheme="secondary"
                ml={3}
              >
                Delete
              </Button>
              <Button
                variant="subtle"
                colorScheme="blueGray"
                onPress={onCloseRemoveModal}
              >
                Cancel
              </Button>
            </Flex>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default RemoveRegister;
