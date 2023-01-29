import moment from "moment";
import {
  Box,
  FlatList,
  HStack,
  VStack,
  Text,
  Spacer,
  CheckIcon,
  Icon,
  DeleteIcon,
} from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DetailAccount = ({ account = [] }) => {
  return (
    <Box>
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
                  color={item.type === "1" ? "green.500" : "red.500"}
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
