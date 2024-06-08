import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import UpdatingNoteScreen from '../screens/UpdateNoteScreen';
import AddNoteForm from '../screens/Note';
import NoteList from '../screens/NoteList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NoteList" component={NoteList} />
          <Stack.Screen name="Note" component={AddNoteForm} />
          <Stack.Screen name="updateNote" component={UpdatingNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
