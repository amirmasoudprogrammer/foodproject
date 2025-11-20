import React from 'react';
import Header from "@/shared/layout/header/Header";
import Footer from "@/shared/layout/footer/Footer";

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