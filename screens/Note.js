import {TextInput, Button, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from '../redux/slice';

const AddNoteForm = ({navigation}) => {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const isDisabled = noteText.trim().length;

  const dispatch = useDispatch();

  navigation.setOptions({
    headerRight: () => (
      <Button
        title="cancel"
        onPress={() => {
          navigation.navigate('NoteList');
        }}
      />
    ),
  });

  const textToTitle = (text, title) => {
    if (title === '') {
      let noteTextBecomeNoteTitle = text.trim();
      return noteTextBecomeNoteTitle.split(' ')[0];
    }
    return title.trim();
  };

  const handleAddNote = () => {
    dispatch(
      addNote({
        id: Math.random(),
        text: noteText.trim(),
        title: textToTitle(noteText, noteTitle),
      }),
    );
    setNoteText('');
    setNoteTitle('');
    navigation.navigate('NoteList');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.title}
          value={noteTitle}
          onChangeText={setNoteTitle}
          multiline
          placeholder="Title..."
          maxLength={20}
        />
        <TextInput
          style={styles.text}
          value={noteText}
          onChangeText={setNoteText}
          multiline
          placeholder="Start writing your Note Here ..."
        />

        <Button
          title="Add Note"
          onPress={handleAddNote}
          disabled={!isDisabled}
        />
      </View>
    </ScrollView>
  );
};

export default AddNoteForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },

  text: {
    color: 'black',
    fontSize: 20,
    backgroundColor: '#e6e6e6',
    padding: 20,
    width: 350,
    height: 500,
    textAlignVertical: 'top', // this is just for andriod
    borderRadius: 7,
  },
  title: {
    borderRadius: 7,
    color: 'black',
    fontSize: 30,
    backgroundColor: '#e6e6e6',
    padding: 20,
    width: 350,
    height: 80,
    marginBottom: 10,
  },
});
