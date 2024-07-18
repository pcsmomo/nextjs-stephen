import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  // db.snippet.deleteMany({});

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id} className="border p-2 m-2">
        <h3>{snippet.title}</h3>
      </div>
    );
  });

  return <div>{renderedSnippets}</div>;
}
