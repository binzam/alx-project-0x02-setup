import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Create Post
        </button>
        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddPost}
        />
        <div className="mt-6 space-y-4">
          {posts.length === 0 ? (
            <p className="text-gray-500">
              No posts yet. Click &quot;Create Post&quot; to add one!
            </p>
          ) : (
            posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
