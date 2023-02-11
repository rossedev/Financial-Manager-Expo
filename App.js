import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/Home";
import DetailAccount from "./src/pages/DetailAccount";
import { useAccount } from "./src/components/useAccount";

export default function App() {
  const Stack = createNativeStackNavigator();
  const { account } = useAccount();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#27296d",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Home">
            {(props) => <Home {...props} account={account} />}
          </Stack.Screen>

          <Stack.Screen name="DetailAccount">
            {(props) => <DetailAccount {...props} account={account} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
