import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

type UsersPageProps = {
  posts: UserProps[];
};

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

// ✅ Add correct type annotation
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Users;
