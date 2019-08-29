import { useState, useEffect } from 'react';

const Profile = (props: any) => {
  const [profileState, setProfileState] = useState(props);

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  return (
    <div>
      <p>
        <strong>Name:</strong>
        {profileState.name}
      </p>
      <p>
        <strong>Email:</strong>
        {profileState.email}
      </p>
    </div>
  );
};

export default Profile;