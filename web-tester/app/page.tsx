import dynamic from 'next/dynamic';

const PDFEditor = dynamic(() => import('./PDFEditor'), { ssr: false });

const Page = () => {
  return <PDFEditor />;
};

export default Page;
