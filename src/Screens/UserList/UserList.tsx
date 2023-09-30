import React, {useEffect, useState} from 'react';
import {queryUsers} from '../../Services/services';
import {ComponentProps, User} from '../../types/types';
import {FlatList, Text} from 'react-native';
import {Button, Container, Image, List, TextHead, TextInfo} from './StylesUl';

const UserList: React.FC<ComponentProps> = ({navigation}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const results = await queryUsers();
        setUsers(results);
      } catch (error) {
        if (error instanceof Error) {
          setErrorState(error.message);
        } else {
          setErrorState('An error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <Container>
        <Image source={require('../../assets/photo-BG-2x.jpg')}>
          {errorState && <Text>Something went wrong</Text>}
          {isLoading && <Text>Loading...</Text>}
          <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <List>
                <Button
                  onPress={() =>
                    navigation.navigate('UserDetails', {user: item})
                  }>
                  <TextHead>
                    Name: <TextInfo>{item.name}</TextInfo>
                  </TextHead>
                  <TextHead>
                    Email: <TextInfo>{item.email}</TextInfo>{' '}
                  </TextHead>
                </Button>
              </List>
            )}
          />
        </Image>
      </Container>
    </>
  );
};

export default UserList;
