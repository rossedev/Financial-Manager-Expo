import { Actionsheet, Fab, Icon, useDisclose } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/Provider";
import { useContext } from "react";

const MenuFab = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclose();

  const changeNavigation = (route) => {
    navigation.navigate(route);
    onClose();
  };

  const openModalToNew = () => {
    context.setNewRegister(true);
    onClose();
  };

  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={<Icon as={AntDesign} size="6" name="home" />}
            onPress={() => changeNavigation("Home")}
          >
            Home
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon as={AntDesign} size="6" name="arrowsalt" />}
            onPress={() => changeNavigation("DetailAccount")}
          >
            Detail
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon as={MaterialIcons} size="6" name="add-shopping-cart" />
            }
            onPress={openModalToNew}
          >
            Add Value
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>

      <Fab
        placement="bottom-right"
        shadow={2}
        size="sm"
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        onPress={onOpen}
        bg="#407088"
      />
    </>
  );
};

export default MenuFab;
