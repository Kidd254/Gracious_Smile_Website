import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogCardContent from "../components/Blog/BlogCardContent";
import Footer from "../components/Layouts/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog"
        breadcrumbUrl="/"
      />

      <BlogCardContent />

      <Footer />
    </>
  );
};

export default Blog;
