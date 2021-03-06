import Head from "next/head";
import Link from "next/link";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "@uiw/react-markdown-preview/dist/markdown.css";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>
        Welcome to Next.js!
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <MDEditor value="**Hello world!!!**" />
    </div>
  );
}

export default HomePage;
