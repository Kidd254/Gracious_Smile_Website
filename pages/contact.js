import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Contact Us"
        breadcrumbUrl="/"
      />

      <ContactForm />

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
};

export default Contact;
