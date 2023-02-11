import moment from "moment";
import {
  Box,
  FlatList,
  HStack,
  Text,
  Spacer,
  Icon,
  Flex,
  Pressable,
  Input,
  SearchIcon,
  Checkbox,
} from "native-base";
import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import EditRegister from "../components/EditRegister";
import RemoveRegister from "../components/RemoveRegister";
import useDetailAccount from "../hooks/DetailAccount/useDetailAccount";

const DetailAccount = ({ account = [] }) => {
  const {
    infoRemove,
    formEdit,
    showConfirmRemoveModal,
    modalEdit,
    newAccount,
    submitRemove,
    onClickDelete,
    submitEdit,
    changeEdit,
    onClickEdit,
    onCloseEditModal,
    onCloseRemoveModal,
    searchToName,
    filterCurrenly,
  } = useDetailAccount(account);

  return (
    <Box>
      <EditRegister
        formEdit={formEdit}
        modalEdit={modalEdit}
        onCloseEditModal={onCloseEditModal}
        changeEdit={changeEdit}
        submitEdit={submitEdit}
      />

      <RemoveRegister
        infoRemove={infoRemove}
        showConfirm={showConfirmRemoveModal}
        onCloseRemoveModal={onCloseRemoveModal}
        submitRemove={submitRemove}
      />

      <Input
        m={5}
        mb={0}
        InputLeftElement={<SearchIcon size={5} ml="2" color="muted.400" />}
        placeholder="Seach"
        onChangeText={searchToName}
      />

      <HStack space={6} m={5} mb={0}>
        <Checkbox
          accessibilityLabel="Filter"
          size="sm"
          onChange={filterCurrenly}
        >
          Currenly month
        </Checkbox>
      </HStack>

      <FlatList
        p={5}
        data={newAccount}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            rounded="8"
            overflow="hidden"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg="coolGray.100"
            p="5"
            mb="4"
          >
            <Box>
              <HStack alignItems="center">
                {item.type === "ingreso" ? (
                  <Icon
                    as={AntDesign}
                    name="upcircle"
                    color="green.300"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    size="5"
                  />
                ) : (
                  <Icon
                    as={AntDesign}
                    name="downcircle"
                    color="red.300"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    size="5"
                  />
                )}

                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  {moment(item.date).format("LL").toString()}
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl"
              >
                {item.concept}
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                {formatCurrency(parseInt(item.value))}
              </Text>
              <Flex direction="row" justifyContent="space-between">
                <Text
                  mt="2"
                  fontSize={15}
                  fontWeight="medium"
                  color="darkBlue.600"
                  onPress={() => {
                    onClickEdit(item);
                  }}
                >
                  Edit
                </Text>

                <Icon
                  as={MaterialIcons}
                  name="delete-outline"
                  color="coolGray.700"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  onPress={() => {
                    onClickDelete(item);
                  }}
                  size="6"
                />
              </Flex>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default DetailAccount;
