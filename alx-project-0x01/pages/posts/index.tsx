import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

type PostsPageProps = {
  posts: PostProps[];
};

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostData[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    setPostList([...postList, { ...newPost, id: postList.length + 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postList.map(({ title, body, userId, id }: PostData) => (
            <PostCard
              key={id}
              title={title}
              body={body}
              userId={userId}
              id={id!}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
