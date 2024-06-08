import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const NavigationOption = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="cancel"
      onPress={() => {
        navigation.navigate('NoteList');
      }}
    />
  );
};
export default NavigationOption;
