import { GetServerSideProps } from 'next';

// This page redirects from /listings/punta-mita to /worldwide-listings/punta-mita---casa-juntos
export default function Redirect() {
  // This component will never be rendered since we're redirecting on the server
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/worldwide-listings/punta-mita---casa-juntos',
      permanent: true,
    },
  };
}; 