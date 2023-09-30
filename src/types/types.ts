export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ComponentProps {
  route: any;
  navigation: any;
}

export interface UserPostsPrors {
  navigation: any;
  userId: number;
}
