import React from "react";
import { Modal, Button, Input } from "native-base";

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
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={onCloseEditModal}
              >
                Cancel
              </Button>
              <Button onPress={submitEdit}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default EditRegister;
