import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/worldwide-listings/cotswolds-uk-soho-farm-house',
      permanent: true,
    },
  };
};

export default function Redirect() {
  return null;
} 