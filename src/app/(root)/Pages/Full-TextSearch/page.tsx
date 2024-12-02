import React from 'react';
import Search from '@/app/(root)/Pages/Search/page';

interface Post {
  slug: string;
  title: string;
  content: string;
}

const SearchPage = async (): Promise<JSX.Element> => {
  const posts: Post[] = await getAllPosts();

  return <Search />;
};

const getAllPosts = async (): Promise<Post[]> => {
  return [
    { slug: 'post-1', title: 'First Post', content: 'This is the first post' },
    { slug: 'post-2', title: 'Second Post', content: 'This is the second post' },
    { slug: 'post-3', title: 'Third Post', content: 'This is the third post' },
  ];
};

export default SearchPage;
