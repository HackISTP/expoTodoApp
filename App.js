import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainScreen from "./screens/MainScreen";
import { store } from "./redux/store";
export default function App() {
  return (
    //MainScreen 안에서 todoSlice 안에 있는 todos[] 에 접근할수있게 provider 로 감싸준다.
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
