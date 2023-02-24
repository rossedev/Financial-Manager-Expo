import React, { useContext } from "react";
import { Text, Box, Button } from "native-base";
import AddRegister from "../components/AddRegister";
import { formatCurrency } from "../utils/formatCurrency";
import useHome from "../hooks/Home/useHome";

const Home = ({ account }) => {
  const { summaryAccount } = useHome(account);

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
        <Text mt={6} mb={2} fontSize="lg">
          <Text bold>Total:</Text> {formatCurrency(summaryAccount.total)}
        </Text>
        <Text mb={2} fontSize="lg">
          <Text bold color="green.500">
            Income:
          </Text>{" "}
          {formatCurrency(summaryAccount.income)}
        </Text>
        <Text mb={5} fontSize="lg">
          <Text bold color="red.500">
            Outcome:
          </Text>{" "}
          {formatCurrency(summaryAccount.outcome)}
        </Text>
      </Box>

      <AddRegister />
    </Box>
  );
};

export default Home;
