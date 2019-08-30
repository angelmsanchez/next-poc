import { useState } from 'react';

import Layout from '../src/components/Layout';
import Profile from '../src/components/Profile';

function About({ userAgent }: any) {
  const [state, setState] = useState({
    name: 'Param',
    email: 'param@gmail.com',
  });

  const handleChange = () => {
    setState({
      name: 'Vennila',
      email: 'vennila@gmail.com',
    });
  };

  return (
    <Layout>
      <p>About Page:</p>
      <h1>Hello world! - user agent: {userAgent}</h1>
      <div>
        <Profile {...state} />
        <button onClick={handleChange}>Change Profile</button>
      </div>
    </Layout>
  );
}

About.getInitialProps = async ({ req }: any) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default About