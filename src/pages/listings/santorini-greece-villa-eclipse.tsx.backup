import { GetServerSideProps } from 'next';

// This page redirects from /listings/santorini-greece-villa-eclipse to /worldwide-listings/santorini-greece-villa-eclipse
export default function Redirect() {
  // This component will never be rendered since we're redirecting on the server
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/worldwide-listings/santorini-greece-villa-eclipse',
      permanent: true,
    },
  };
}; 