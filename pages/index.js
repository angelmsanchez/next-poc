import Link from 'next/link';

import axios from 'axios';

import Layout from '../src/components/Layout';

const PostLink = props => (
  <li key={props.show.id}>
    <Link href="/post/[id]" as={`/post/${props.show.id}`}>
      <a>{props.show.name}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <div>
          <PostLink show={show} />
        </div>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.data;

  console.log(`Show data fetched. Count:`, data.map(entry => entry.show));

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index