import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import About from "../Screens/About";
import HomeStack from "../Stack/HomeStack";

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
