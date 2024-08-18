import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView style={styles.lottie} source={require("../assets/loader.json")} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fdf6aa",
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 250,
    height: 250,
  },
});

export default Loader;
