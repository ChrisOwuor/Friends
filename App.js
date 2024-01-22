import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./Stack/HomeStack";
import MainDrawer from "./Drawer/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <MainDrawer />
    </NavigationContainer>
  );
}
