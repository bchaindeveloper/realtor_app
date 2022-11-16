import Head from 'next/head';
import {Box} from '@chakra-ui/react';



const Layout = () => {
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <Box maxWidth="1200px" m="auto">
        <header>
            Navbar
        </header>
        <main>
            {children}
        </main>
        <Footer>
            Footer
        </Footer>
    </Box>
    </>
};

export default Layout;
