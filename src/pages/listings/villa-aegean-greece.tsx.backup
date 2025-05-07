import { GetServerSideProps } from 'next';

// This page redirects from /listings/villa-aegean-greece to /worldwide-listings/mykonos-crystal-villa
export default function Redirect() {
  // This component will never be rendered since we're redirecting on the server
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/worldwide-listings/mykonos-crystal-villa',
      permanent: true,
    },
  };
}; 