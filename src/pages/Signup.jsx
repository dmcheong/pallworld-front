import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';
import SideImage from '../components/SideImage';


const Signup = () => {
  return (
    <div>
      <Header />

      <section className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          
          {/* Left: Image */}
          <SideImage />


          {/* Right: Signup Form */}
          <div className="md:w-1/2 p-4">
            <SignupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signup;
