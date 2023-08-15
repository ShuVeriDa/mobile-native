import {ActivityIndicator, Text, View} from "react-native";

export const Loading = () => {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ActivityIndicator/>
        <Text style={{marginTop: 15}}>Загрузка...</Text>
      </View>
    )
}