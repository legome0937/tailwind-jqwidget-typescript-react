import React, { FC } from 'react';
// import Header from '../components/header';
//import Footer from '../components/footer';

interface Props {
  children: React.ReactNode;
}

const RootPage: FC<Props> = ({ children }) => {

  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
     
    </>
  );
};

export default RootPage;
