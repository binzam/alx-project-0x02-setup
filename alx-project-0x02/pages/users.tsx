import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserData, UserProps } from '@/interfaces';

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex justify-between w-1/2 mx-auto mb-4">
          <h1 className=" text-2xl font-semibold text-white">Users List</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users?.map(
            ({ id, name, username, email, address }: UserData, key: number) => (
              <UserCard
                id={id}
                name={name}
                username={username}
                email={email}
                address={address}
                key={key}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
export default Users;
