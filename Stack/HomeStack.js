import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Single from "../Screens/Single";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="Friends"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Single" component={Single} />
    </Stack.Navigator>
  );
}
