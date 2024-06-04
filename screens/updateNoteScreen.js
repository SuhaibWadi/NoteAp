import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import {idk} from '../redux/slice';
export default function UpdatingNote({navigation, route}) {
  dispatch = useDispatch();
  const theId = route.params.id;
  console.log('the id', theId);
  //   const notesText = useSelector(state => state.notes.items[0].text);
  const notes = useSelector(state => state.notes.items);
  console.log(notes);
  const noteObject = notes.find(item => item.id === theId);
  const noteText = noteObject.text;

  // console.log('is it', noteObject);
  const [textUpdate, setTextUpdate] = useState(noteText);
  const [titleUpdate, setTitleUpdate] = useState(noteText);

  function updateHandler() {
    const noteIndex = notes.indexOf(noteObject);
    const updatedNoteObject = {
      ...notes[noteIndex],
      text: textUpdate,
      title: titleUpdate,
    };
    const updatedNoteData = [
      ...notes.slice(0, noteIndex),
      updatedNoteObject,
      ...notes.slice(noteIndex + 1),
    ];
    //change the name => idk
    dispatch(idk(updatedNoteData));
    console.log('updated!!', noteIndex, updatedNoteData, notes);
    navigation.navigate('NoteList');
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={titleUpdate}
        style={styles.title}
        multiline
        onChange={e => setTitleUpdate(e.nativeEvent.text)}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },

  text: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#9f9f9f',
    padding: 20,
    width: 350,
    height: 500,
    textAlignVertical: 'top', // this is just for andriod
  },
  title: {
    borderRadius: 7,
    color: 'black',
    fontSize: 20,
    backgroundColor: '#9f9f9f',
    padding: 20,
    width: 350,
    height: 80,
  },
});
