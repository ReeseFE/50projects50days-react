import Link from 'next/link';
import getPages from '../utils/getPages';

export default function Home() {
  const pages = getPages();

  return (
    <div>
      <h1>50projects50days-react</h1>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link href={`/${page}`}>{page || 'Home'}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
