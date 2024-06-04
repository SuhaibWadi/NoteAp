import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import RemixIcon from 'react-native-remix-icon';
const CreateNewNoteButton = ({handleCreateNewNote}) => {
  return (
    <View style={styles.addNote}>
      <TouchableOpacity onPress={() => handleCreateNewNote()}>
        <RemixIcon name="add-circle-fill" size={70} color="#427dde" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addNote: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    paddingRight: 50,
    paddingBottom: 50,
  },
});

export default CreateNewNoteButton;
