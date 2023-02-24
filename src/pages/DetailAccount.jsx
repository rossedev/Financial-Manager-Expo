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
  Badge,
  Divider,
} from "native-base";
import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
        placeholder="Search"
        onChangeText={searchToName}
      />

      <HStack space={6} m={5} mb={0}>
        <Checkbox
          accessibilityLabel="Filter"
          size="sm"
          onChange={filterCurrenly}
        >
          Current month
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
            mb={3}
          >
            <Box>
              <HStack alignItems="center">
                {item.type === "ingreso" ? (
                  <Badge
                    startIcon={<Icon as={AntDesign} name="arrowup" size="4" />}
                    variant="solid"
                    bg="green.300"
                    rounded="8"
                  >
                    INCOME
                  </Badge>
                ) : (
                  <Badge
                    startIcon={
                      <Icon as={AntDesign} name="arrowdown" size="4" />
                    }
                    variant="solid"
                    bg="red.300"
                    rounded="8"
                  >
                    INCOME
                  </Badge>
                )}

                <Spacer />
                <Text fontSize={13} color="coolGray.800">
                  {moment(item.date).format("LL").toString()}
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl"
              >
                {formatCurrency(parseInt(item.value))}
              </Text>
              <Text mt="2" fontSize="16" color="coolGray.700" inc>
                {item.concept}
              </Text>
              <Flex direction="row" justifyContent="flex-end">
                <Icon
                  as={MaterialCommunityIcons}
                  name="circle-edit-outline"
                  color="#27296d"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  onPress={() => {
                    onClickEdit(item);
                  }}
                  size="6"
                />
                <Divider
                  bg="coolGray.700"
                  thickness="2"
                  mx="3"
                  orientation="vertical"
                />
                <Icon
                  as={MaterialIcons}
                  name="delete-outline"
                  color="#27296d"
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
