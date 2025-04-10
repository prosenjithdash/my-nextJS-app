import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const CommonLayout = ({children}) => {
    return (
        <div>
            {/* Not Global */}
            {/* <Navbar/> */} 
            {children}
            {/* <Footer/> */}
        </div>
    );
};

export default CommonLayout;