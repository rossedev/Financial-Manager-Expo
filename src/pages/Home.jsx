import React, { useEffect, useState } from "react";
import { database } from "../config/fb";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Text, Box } from "native-base";

const Home = () => {
  const [track, setTrack] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, "accounts");
    const q = query(collectionRef);

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setTrack(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          concept: doc.data().concept,
          value: doc.data().value,
          type: doc.data().type,
          date: doc.data().date,
        }))
      );
      return unsuscribe;
    });
  }, []);

  return (
    <Box
      flex={1}
      alignItems="center"
      bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="xl"
    >
      <Box
        bg="rgba(255, 255, 255, 0.9)"
        rounded="md"
        p="4"
        size="xs"
        shadow={5}
      >
        <Text>Open up App.js to start working on your app!</Text>
        {console.log("track", track)}
      </Box>
    </Box>
  );
};

export default Home;
