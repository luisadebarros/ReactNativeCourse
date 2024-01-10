import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default (props) => {
  const num = Math.round( Math.random() * (props.max - props.min) + props.min)
  return <Text style={Estilo.big}>{num}</Text>;
};
