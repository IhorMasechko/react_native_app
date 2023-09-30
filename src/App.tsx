import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './Screens/UserList/UserList';
import UserDetails from './Screens/UserDetails/UserDetails';
import PostDetails from './Screens/PostDetails/PostDetails';
import {Post} from './types/types';

export type RootStackParamList = {
  UserPosts: {userId: number};
  PostDetails: {post: Post};
};

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{title: 'User List'}}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{title: 'User Details'}}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{title: 'Post Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
