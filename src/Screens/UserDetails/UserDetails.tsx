import React from 'react';
import {View} from 'react-native';
import UserPosts from '../../components/UserPosts';
import {ComponentProps} from '../../types/types';
import {
  Container,
  ContainerPosts,
  TextDetails,
  TextHead,
  TextPosts,
} from './StylesUd';

const UserDetails: React.FC<ComponentProps> = ({route, navigation}) => {
  const {user} = route.params;

  return (
    <View>
      <Container>
        <TextHead>
          Name:
          <TextDetails> {user.name}</TextDetails>
        </TextHead>
        <TextHead>
          Email:
          <TextDetails> {user.email}</TextDetails>
        </TextHead>
        <TextHead>
          Phone:
          <TextDetails> {user.phone}</TextDetails>
        </TextHead>
        <TextHead>
          Website:
          <TextDetails> {user.website}</TextDetails>
        </TextHead>
        <TextHead>
          Company:
          <TextDetails> {user.company.name}</TextDetails>
        </TextHead>
      </Container>
      <ContainerPosts>
        <TextPosts>Posts</TextPosts>
      </ContainerPosts>

      <UserPosts userId={user.id} navigation={navigation} />
    </View>
  );
};

export default UserDetails;
