import moment from "moment";
import {
  Box,
  FlatList,
  HStack,
  VStack,
  Text,
  Spacer,
  Icon,
  DeleteIcon,
  Modal,
  Button,
  Input,
  useToast,
} from "native-base";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../config/fb";
import AlertBase from "../components/AlertBase";

const DetailAccount = ({ account = [] }) => {
  const toast = useToast();
  const [modalEdit, setModalEdit] = useState(false);
  const [formEdit, setFormEdit] = useState({});

  const onClickEdit = (infoEdit) => {
    setModalEdit(!modalEdit);
    setFormEdit(infoEdit);
  };

  const changeEdit = (text, name) => {
    setFormEdit({
      ...formEdit,
      [name]: text,
    });
  };

  const submitEdit = () => {
    console.log("formEdit", formEdit);

    const docRef = doc(database, "accounts", formEdit.id);
    updateDoc(docRef, {
      concept: formEdit.concept,
    });

    toast.show({
      render: () => {
        return <AlertBase text="Successful edition" />;
      },
    });

    setModalEdit(false);
  };

  return (
    <Box>
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
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
                onPress={() => {
                  setModalEdit(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={submitEdit}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <FlatList
        p={5}
        data={account}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "muted.50",
            }}
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="2"
          >
            <HStack
              space={[2, 3]}
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <VStack>
                <HStack justifyContent="space-around" alignItems="center">
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.concept}
                  </Text>
                  <Icon
                    onPress={() => {
                      onClickEdit(item);
                    }}
                    as={MaterialCommunityIcons}
                    name="pencil-circle-outline"
                    color="blue.800"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    size="6"
                  />
                </HStack>

                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {moment(item.date).format("LL").toString()}
                </Text>
              </VStack>
              <Spacer />

              <VStack>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color={item.type === "ingreso" ? "green.500" : "red.500"}
                  alignSelf="flex-start"
                >
                  {item.value}
                </Text>

                <DeleteIcon size="5" mt="0.5" color="red.700" />
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default DetailAccount;
