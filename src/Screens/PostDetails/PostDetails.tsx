import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Post, ComponentProps} from '../../types/types';
import {queryPostDetails} from '../../Services/services';
import {Container, TextHead, TextInfo} from './StylesPd';

const PostDetails: React.FC<ComponentProps> = ({route}) => {
  const {post} = route.params;
  const [loadedPost, setLoadedPost] = useState<Post | null>(null);

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const results = await queryPostDetails(post.id);
        setLoadedPost(results);
      } catch (error) {
        if (error instanceof Error) {
          return error.message;
        }
      }
    };
    getPostDetails();
  }, [post]);

  return (
    <View>
      {loadedPost ? (
        <Container>
          <TextHead>
            Title: <TextInfo>{loadedPost.title}</TextInfo>
          </TextHead>
          <TextHead>
            Content: <TextInfo>{loadedPost.body}</TextInfo>
          </TextHead>
        </Container>
      ) : (
        <Text>Loading post details...</Text>
      )}
    </View>
  );
};

export default PostDetails;
