import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loader = () => {
  return <LottieView style={styles.lottie} source={require("../assets/loader.json")} autoPlay loop />;
};

const styles = StyleSheet.create({
  lottie: {
    width: 350,
    height: 350,
  },
});

export default Loader;
