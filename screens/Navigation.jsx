import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./HomeScreen";
import {FullPostScreen} from "./FullPostScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"}
                      component={HomeScreen}
                      options={{title: 'Новости'}}
        />
        <Stack.Screen name={"FullPost"}
                      component={FullPostScreen}
                      options={{title: 'Статья'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}