import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TextInput, View, StyleSheet, Button} from 'react-native';
import {updateNote} from '../redux/slice';
const UpdatingNoteScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const theId = route.params.id;

  const notes = useSelector(state => state.notes.items);
  const noteObject = notes.find(item => item.id === theId);
  const noteText = noteObject.text;
  const noteTitle = noteObject.title;

  const [textUpdate, setTextUpdate] = useState(noteText);
  const [titleUpdate, setTitleUpdate] = useState(noteTitle);

  function textToTitle(text, title) {
    if (title === '') {
      let noteTextBecomeNoteTitle = text.trim();
      return noteTextBecomeNoteTitle.split(' ')[0];
    }
    return title.trim();
  }
  function updateHandler() {
    const noteIndex = notes.indexOf(noteObject);
    const newNoteData = {
      ...notes[noteIndex],
      text: textUpdate.trim(),
      title: textToTitle(textUpdate, titleUpdate),
    };
    dispatch(updateNote({noteIndex, newNoteData}));
    navigation.navigate('NoteList');
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={titleUpdate}
        style={styles.title}
        onChange={e => setTitleUpdate(e.nativeEvent.text)}
        maxLength={20}
      />
      <TextInput
        value={textUpdate}
        style={styles.text}
        multiline
        onChange={e => setTextUpdate(e.nativeEvent.text)}
      />
      <Button title="update Note" onPress={updateHandler} />
    </View>
  );
};
export default UpdatingNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },
  text: {
    color: 'black',
    fontSize: 20,
    backgroundColor: '#9f9f9f',
    padding: 20,
    width: 350,
    height: 500,
    textAlignVertical: 'top', // this is just for andriod
    borderRadius: 7,
  },
  title: {
    borderRadius: 7,
    color: 'black',
    fontSize: 20,
    backgroundColor: '#9f9f9f',
    padding: 20,
    width: 350,
    height: 80,
    marginBottom: 10,
  },
});
