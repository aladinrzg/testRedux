import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider, useDispatch } from "react-redux";
import UserContainer from "./components/userContainer";
import User from "./components/userContainer";
import { store } from "./redux/store";

function App(props) {
  return (
    <Provider store={store}>
      <View>
        <UserContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
