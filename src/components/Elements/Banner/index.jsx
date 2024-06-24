import Button from "../Button";

const Banner = () => {
  return (
    <section
      className="bg-image-banner bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "../../public/banner.jpeg" }}
    >
      <div className="container px-6 mx-auto">
        <div className=" max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Mulai budi daya hidroponik mu dengan kami!
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Rasakan pengalaman menanam hidroponik secara mudah dan informatif
              dengan fitur yang kami sediakan
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Button>Daftar Sekarang</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
