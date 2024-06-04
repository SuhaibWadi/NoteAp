import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  FlatList,
  Pressable,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import RemixIcon from 'react-native-remix-icon';
import {deleteNote, updateNote} from '../redux/slice';

function NoteList({navigation, route}) {
  const notes = useSelector(state => state.notes.items);
  const dispatch = useDispatch();

  // navigation.setOptions({
  //   backgroundColor: 'black',
  //   headerRight: () => (
  //     <Button
  //       title="go to note"
  //       onPress={() => {
  //         navigation.navigate('Note');
  //       }}
  //     />
  //   ),
  // });

  const handleDeleteNote = id => {
    console.log({id});
    
    dispatch(deleteNote(id));
  };
  const handleCreateNewNote = id => {
    navigation.navigate('Note');
  };

  const handleUpdate = id => {
    navigation.navigate('updateNote', {id});
  };

  // let threeDotNoteEnd =item.text.length > 8 ? item.text.slice(0, 8 - 1) + '…' : item.text;
  // console.log("let three",threeDotNoteEnd)
  return (
    <>
      {/* <View style={styles.titleContainer}>
          <Text style={styles.title}>My Notes</Text>
        </View>
        <View style={styles.line}></View> */}
      <View style={styles.container}>
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() => handleUpdate(item.id)}
              onLongPress={() => handleDeleteNote(item.id)}>
              <View style={styles.noteContainer}>
                <View style={styles.innerContainer}>
                  <View style={styles.circle} />

                  <Text numberOfLines={1} style={styles.noteTitle}>
                    {item.title.length > 8
                      ? item.title.slice(0, 8 - 1) + '…'
                      : item.title}
                  </Text>
                </View>
                <Text style={styles.text} numberOfLines={1}>
                  {item.text.length > 8
                    ? item.text.slice(0, 8 - 1) + '…'
                    : item.text}
                </Text>
                <View style={styles.deleteIcon}>
                  <TouchableOpacity onPress={() => handleDeleteNote(item.id)}>
                    <RemixIcon name="delete-bin-fill" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          )}
        />
        <View style={styles.addNote}>
          <TouchableOpacity onPress={() => handleCreateNewNote()}>
            <RemixIcon name="add-circle-fill" size={70} color="#427dde" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default NoteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6e6e6',
    // maxHeight:650
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
    fontSize:15,
    marginLeft:20
  },
  noteTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    marginBottom: 10,
    fontSize:20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d1cbcb',
    marginRight: 5,
    marginTop: 3,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  deleteIcon: {
    alignSelf: 'flex-end',
    opacity: 0.5,
    
    // justifyContent:"flex-end",
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
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray',
    marginBottom: 15,
  },
  addNote: {
    // position:"absolute",
    alignSelf: "flex-end",
    position:"absolute",
    marginTop:650,
    paddingRight:50


    // marginRight: 30,
  },
});
