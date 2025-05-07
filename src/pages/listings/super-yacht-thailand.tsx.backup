import { GetServerSideProps } from 'next';

// This page redirects from /listings/super-yacht-thailand to /worldwide-listings/super-yacht-thailand
export default function Redirect() {
  // This component will never be rendered since we're redirecting on the server
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/worldwide-listings/super-yacht-thailand',
      permanent: true,
    },
  };
}; 