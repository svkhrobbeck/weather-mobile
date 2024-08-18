import { Loader } from "@/components";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ff9900", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#000" }}>
        <StatusBar backgroundColor="yellow" />
        <Loader />;
      </Text>
    </View>
  );
};

export default App;
