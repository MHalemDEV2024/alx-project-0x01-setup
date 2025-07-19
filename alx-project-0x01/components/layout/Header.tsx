import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-100 p-4 flex gap-4">
    <Link href="/">Home</Link>
    <Link href="/posts">Posts</Link>
    <Link href="/users">Users</Link>
  </header>
);

export default Header;
