import { useState } from 'react';

import Layout from '../src/components/Layout';
import Profile from '../src/components/Profile';

export default function About() {
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
      <div>
        <Profile {...state} />
        <button onClick={handleChange}>Change Profile</button>
      </div>
    </Layout>
  );
}