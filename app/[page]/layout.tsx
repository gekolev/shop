import Footer from 'components/layout/footer';

export const config = {
  runtime: 'nodejs', // Use Node.js runtime instead of Edge runtime
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}
