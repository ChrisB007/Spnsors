import { Feed } from '../../components';
import { getSession, useSession } from 'next-auth/react';

import React from 'react';

const Index = ({ session }) => {
  return (
    <div>
      <Feed />
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
