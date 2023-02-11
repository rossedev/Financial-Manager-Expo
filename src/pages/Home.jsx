import React from "react";
import { Text, Box, Button, Fab, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AddRegister from "../components/AddRegister";
import { formatCurrency } from "../utils/formatCurrency";
import useHome from "../hooks/Home/useHome";

const Home = ({ navigation, account }) => {
  const {
    summaryAccount,
    form,
    modalVisible,
    changeView,
    onChangeForm,
    addRegister,
  } = useHome(account);

  return (
    <Box>
      <Box
        p={4}
        m={2}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        shadow={2}
        borderWidth={0}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Text fontSize="3xl" bold>
          Welcome Rose
        </Text>
        <Text fontSize="lg">This is your summary</Text>
        <Text mt={6} mb={2}>
          <Text bold>Total:</Text> {formatCurrency(summaryAccount.total)}
        </Text>
        <Text mb={2}>
          <Text bold color="green.500">
            Income:
          </Text>{" "}
          {formatCurrency(summaryAccount.income)}
        </Text>
        <Text mb={5}>
          <Text bold color="red.500">
            Outcome:
          </Text>{" "}
          {formatCurrency(summaryAccount.outcome)}
        </Text>

        <Button
          onPress={() => navigation.navigate("DetailAccount")}
          variant="subtle"
          colorScheme="secondary"
        >
          Go to Details
        </Button>
      </Box>

      <Fab
        placement="bottom-right"
        renderInPortal={true}
        shadow={2}
        size="sm"
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        onPress={() => {
          changeView(!modalVisible);
        }}
        bg="#27296d"
      />

      <AddRegister
        form={form}
        modalVisible={modalVisible}
        changeView={changeView}
        onChangeForm={onChangeForm}
        addRegister={addRegister}
      />
    </Box>
  );
};

export default Home;
