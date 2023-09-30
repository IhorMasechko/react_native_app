import axios, {AxiosResponse} from 'axios';
import {Post, User} from '../types/types';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const queryUsers = async (): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await axios.get(`${baseURL}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const queryPosts = async (userId: number): Promise<Post[]> => {
  try {
    const response: AxiosResponse<Post[]> = await axios.get(
      `${baseURL}/users/${userId}/posts`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const queryPostDetails = async (id: number): Promise<Post> => {
  try {
    const response: AxiosResponse<Post> = await axios.get(
      `${baseURL}/posts/${id}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
