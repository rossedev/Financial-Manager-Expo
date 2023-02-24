import React from "react";
import { Modal, Button, Input, Flex } from "native-base";

const EditRegister = ({
  formEdit,
  modalEdit,
  onCloseEditModal,
  changeEdit,
  submitEdit,
}) => {
  return (
    <>
      <Modal isOpen={modalEdit} onClose={onCloseEditModal}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Edit</Modal.Header>
          <Modal.Body>
            <Input
              variant="underlined"
              w="100%"
              value={formEdit.concept}
              onChangeText={(e) => changeEdit(e, "concept")}
              placeholder="Concept"
            />

            <Flex direction="row-reverse" mb="2" mt="10">
              <Button
                onPress={submitEdit}
                variant="subtle"
                colorScheme="primary"
                ml={3}
              >
                Edit
              </Button>
              <Button
                variant="subtle"
                colorScheme="blueGray"
                onPress={onCloseEditModal}
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

export default EditRegister;
