import Link from 'next/link';

import Layout from '../src/components/Layout';

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <ul>
      <PostLink id="hello-nextjs" />
      <PostLink id="learn-nextjs" />
      <PostLink id="deploy-apps" />
    </ul>
  </Layout>
)

export default Index