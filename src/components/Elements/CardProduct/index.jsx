import Button from "../Button";
import Prdk1 from "../../../assets/produkhome1.png";
import Prdk2 from "../../../assets/produkhome2.png";
import Prdk3 from "../../../assets/produkhome3.png";
import Prdk4 from "../../../assets/produkhome4.jpg";
import Prdk5 from "../../../assets/produkhome5.jpg";
import Prdk6 from "../../../assets/produkhome6.jpg";
const cardJson = [
  {
    id: 1,
    title: "Pipa  Hidroponik",
    description: "Paket instalasi hidroponik nft dft 2 inchi",
    image:Prdk1,
  },
  {
    id: 2,
    title: "Meter alat ukur air",
    description: "Spesifikasi:- Range EC: 0 - 9990 us/cm- Range TDS: 0 - 9990 ppm",
    image:Prdk2,
  },
  {
    id: 3,
    title: "Media Tanam Hidroponik - Rockwool ",
    description: "",
    image:Prdk3,
  },
  {
    id: 4,
    title: "Media Tanam Hidroponik - Rockwool ",
    description: "",
    image:Prdk4,
  },

  {
    id: 5,
    title: "Media Tanam Hidroponik - Rockwool ",
    description: "",
    image:Prdk5,
  },
  {
    id: 6,
    title: "Media Tanam Hidroponik - Rockwool ",
    description: "",
    image:Prdk6,
  },
];


const CardProduct = () => {
  return (
    <div className="py-12">
      <div className=" xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardJson.map((card) => (
            <div
              key={card.id}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-[#EBF8FE] bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-black">
                  {card.title}
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-black">
                  {card.description}
                </p>
                <Button>Detail</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
