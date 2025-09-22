import React from 'react';
import Header from "@/components/client/layout/header/Header";
import Footer from "@/components/client/layout/footer/Footer";

function Layout({children}) {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>

        </>
    );
}

export default Layout;