import Artikel from "../components/Elements/Artikel";
import Banner from "../components/Elements/Banner";
import Navbar from "../components/Elements/Navbar";
import Section from "../components/Elements/Section";
import Footer from "../components/Elements/Footer";
import CardFeatures from "../components/Elements/CardFeatures";
import CardProduct from "../components/Elements/CardProduct";
import Card from "../components/Elements/Card";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <CardFeatures />
      {/* <CardProduct /> */}
      <div className="my-20">
        <h1 className="text-center text-5xl text-green-600 font-bold">
          Product
        </h1>
        <div className="mt-15">
          <Card />
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-center text-5xl text-green-600 font-bold">
          Artikel Terbaru
        </h1>
        <div className="mt-15">
          <Artikel />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
