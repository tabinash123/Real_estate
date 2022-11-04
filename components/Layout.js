import React from 'react'
import Head from 'next/head';
import { Box, Icon } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { BsHouseFill } from 'react-icons/bs'


const Layout = ({children}) => {
  return (
    <div>
      <Head>
        
        <title> Real Estate</title>
      </Head>
      <Box maxWidth="90%" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer>footer</Footer>
      </Box>
    </div>
  );
}

export default Layout