import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList, Text, View, StyleSheet, Alert} from 'react-native';

import {deleteNote} from '../redux/slice';
import CreateNewNoteButton from '../components/CreateNewNoteButton';
import RenderedItem from '../components/RenderedNotes';
const NoteList = ({navigation, route}) => {
  const notes = useSelector(state => state.notes.items);
  const dispatch = useDispatch();
  const handleDeleteNote = id => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            dispatch(deleteNote(id));
          },
          style: 'destructive',
        },
      ],
    );
  };
  const handleCreateNewNote = () => {
    navigation.navigate('Note');
  };

  const handleUpdate = id => {
    navigation.navigate('updateNote', {id});
  };

  const renderThreeDot = item =>
    item.length > 8 ? item.slice(0, 8) + '…' : item;

  if (notes.length === 0) {
    return (
      <View style={styles.noteForUserContainer}>
        <View>
          <Text style={styles.noteForUser}>
            No note added please add a note
          </Text>
        </View>
        <CreateNewNoteButton handleCreateNewNote={handleCreateNewNote} />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RenderedItem
              item={item}
              renderThreeDot={renderThreeDot}
              handleDeleteNote={handleDeleteNote}
              handleUpdate={handleUpdate}
            />
          )}
        />
        <CreateNewNoteButton handleCreateNewNote={handleCreateNewNote} />
      </View>
    </>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6e6e6',
  },
  noteContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 10,
    margin: 3,
    color: 'white',
  },
  text: {
    color: 'black',
    fontFamily: 'Cochin',
    fontSize: 15,
    marginLeft: 20,
  },
  noteTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    marginBottom: 10,
    fontSize: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d1cbcb',
    marginRight: 5,
    marginTop: 6,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  deleteIcon: {
    alignSelf: 'flex-end',
    opacity: 0.5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 30,
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  noteForUser: {
    fontSize: 20,
    fontFamily: 'Cochin',
  },
  noteForUserContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
