import Link from 'next/link';

import axios from 'axios';

import Layout from '../src/components/Layout';

const PostLink = (props: any) => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.show.id}`}>
      <a>{props.show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        color: red;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = (props: any) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show: any) => (
        <PostLink key={show.id} show={show} />
      ))}
    </ul>
    <style jsx global>{`
      h1 {
        font-family: 'Arial';
        color: blue;
      }

      ul {
        padding: 0;
      }

      a {
        font-family: 'Arial';
        text-decoration: none;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.data;

  console.log(`Show data fetched. Count:`, data.map((entry: any) => entry.show));

  return {
    shows: data.map((entry: any) => entry.show)
  };
};

export default Index