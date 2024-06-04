import React from 'react';
// import {SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import UpdatingNote from './screens/updateNoteScreen';
import AddNoteForm from './screens/Note';
import NoteList from './screens/NoteList';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: true, // Hide the header
          // contentStyle:{red}
          // headerTintColor:"gray",
          
        }}>
          <Stack.Screen name="Note" component={AddNoteForm} />
          <Stack.Screen name="NoteList" component={NoteList} />
          <Stack.Screen name="updateNote" component={UpdatingNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
