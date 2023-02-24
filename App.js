import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/Home";
import DetailAccount from "./src/pages/DetailAccount";
import { useAccount } from "./src/components/useAccount";
import MenuFab from "./src/components/MenuFab";
import { Provider } from "./src/context/Provider";

export default function App() {
  const Stack = createNativeStackNavigator();
  const { account } = useAccount();

  return (
    <Provider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#407088",
                textAlign: "center",
              },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen name="Home" options={{ title: "My home" }}>
              {(props) => <Home {...props} account={account} />}
            </Stack.Screen>

            <Stack.Screen name="DetailAccount" options={{ title: "Detail" }}>
              {(props) => <DetailAccount {...props} account={account} />}
            </Stack.Screen>
          </Stack.Navigator>
          <MenuFab />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
