import React from "react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AuthProvider from "../components/authProvider/AuthProvider";


const GlobalLayout = ({
    children,
}) => {
    return (
        <AuthProvider>
            <div className="">
                <Navbar />
                {children}
                <Footer />
            </div>
        </AuthProvider>
    );
};

export default GlobalLayout;
