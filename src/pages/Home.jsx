import React from "react";
import { Text, Box, Button } from "native-base";

const Home = ({ navigation }) => {
  return (
    <Box>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => navigation.navigate("DetailAccount")}>
        Go to Details
      </Button>
      {/* console.log("track", track) */}
    </Box>
  );
};

export default Home;
