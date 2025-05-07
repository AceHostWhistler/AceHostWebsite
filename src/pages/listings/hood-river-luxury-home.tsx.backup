import { GetServerSideProps } from 'next';

// This page redirects from /listings/hood-river-luxury-home to /worldwide-listings/hood-river-luxury-home
export default function Redirect() {
  // This component will never be rendered since we're redirecting on the server
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/worldwide-listings/hood-river-luxury-home',
      permanent: true,
    },
  };
}; 