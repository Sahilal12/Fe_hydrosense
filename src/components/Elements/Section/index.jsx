// import Button from "../Button";
import sectiongambar from "../../../assets/section.png"
import Button from "../Button";

const Section = () => {
  return (
    <section>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-black lg:text-4xl">
                Kenapa harus kami ?
              </h1>

              <p className="mt-3 text-gray-600 dark:text-black">
                HydroSense menyajikan informasi seputar cara mengelola tanaman
                hidroponik, dan disertai panduan terstruktur.
              </p>

              <div className="mt-6">
                <Button>Temukan</Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;
