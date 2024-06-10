import {TextInput, Button, StyleSheet, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from '../redux/slice';
import NavigationOption from '../components/NavigationOption';
const AddNoteForm = ({navigation}) => {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const isDisabled = noteText.trim().length;

  const dispatch = useDispatch();

  navigation.setOptions({
    headerRight: () => <NavigationOption />,
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
    <ScrollView contentContainerStyle={styles.container}>
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

      <Button title="Add Note" onPress={handleAddNote} disabled={!isDisabled} />
    </ScrollView>
  );
};

export default AddNoteForm;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 50,
    flex: 1,
  },

  text: {
    color: 'black',
    fontSize: 20,
    backgroundColor: '#e6e6e6',
    padding: 20,
    height: '80%',
    textAlignVertical: 'top',
    borderRadius: 7,
  },
  title: {
    borderRadius: 7,
    color: 'black',
    fontSize: 30,
    backgroundColor: '#e6e6e6',
    padding: 20,
    width: '100%',
    height: '8%',
    marginBottom: 10,
  },
  noteContainer: {
    backgroundColor: 'black',
  },
});
