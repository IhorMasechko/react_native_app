import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {UserPostsPrors, Post} from '../types/types';
import {queryPosts} from '../Services/services';
import {Button, List, TextHead, TextInfo} from './StylesUp';

const UserPosts: React.FC<UserPostsPrors> = ({userId, navigation}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const results = await queryPosts(userId);
        setPosts(results);
      } catch (error) {
        if (error instanceof Error) {
          return error.message;
        }
      }
    };
    getPosts();
  }, [userId]);

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <List>
          <Button
            onPress={() => navigation.navigate('PostDetails', {post: item})}>
            <TextHead>
              Title: <TextInfo>{item.title}</TextInfo>
            </TextHead>
            <TextHead>
              Content: <TextInfo>{item.body.substring(0, 50)}...</TextInfo>
            </TextHead>
          </Button>
        </List>
      )}
    />
  );
};

export default UserPosts;
