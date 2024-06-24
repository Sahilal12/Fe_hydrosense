// import Banner from "../components/Elements/Banner";
import Card from "../components/Elements/CardProduct/index";
import Footer from "../components/Elements/Footer";
import HeroSection from "../components/Elements/HeroSection";
import Navbar from "../components/Elements/Navbar";
import Search from "../components/Elements/Search";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <div className=" my-20">
          <h1 className="text-center text-5xl text-green-600 font-bold">
            Product
          </h1>
          <div className="flex justify-center items-center my-5">
            <Search />
          </div>
          <div className="mt-20">
            <Card />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
