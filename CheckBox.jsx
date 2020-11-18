import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import styles from './Styles/CheckBoxStyle';
import {Colors} from '../../Themes';

const CustomCheckBox = props => {
  return (
    <TouchableOpacity
      isOn={props.isOn}
      onPress={() => {
        props.onPress(props.isOn);
      }}
      style={[
        styles.checkBoxContainer,
        props.style,
        {backgroundColor: props.isOn ? Colors.link : Colors.weakgray},
      ]}
    />
  );
};
export default CustomCheckBox;
