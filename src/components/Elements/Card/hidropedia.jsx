import Button from "../Button";
import artikel1 from "../../../assets/fotoartikel1.jpg";
import artikel2 from "../../../assets/fotoartikel2.jpg";
import artikel3 from "../../../assets/fotoartikel3.jpg";
import artikel4 from "../../../assets/fotoartikel4.jpg";
import artikel6 from "../../../assets/fotoartikel6.jpg";
const cardJson = [
  {
    id: 1,
    title: "Cara Menanam cabai untuk pemula",
    description: "mau tau cara menanam cabai dengan mudah?",
    image:artikel1,
  },
  {
    id: 2,
    title: "Membuat Greenhouse sederhana",
    description: "Greenhouse dapat menciptakan kondisi mikro yang ideal bagi tanaman",
    image:artikel2,
  },
  {
    id: 3,
    title: "ingin menanam selada hidroponik sendiri di rumah?",
    description: "Cara menanam Selada Hidroponik",
    image:artikel3,
  },
  
  {
    id: 4,
    title: "Cara Menanam Bawang untuk pemula",
    description: "mau tau cara menanam bawang dengan mudah?",
    image:artikel4,
  },
  {
    id: 5,
    title: "Membuat Greenhouse sederhana",
    description: "Greenhouse dapat menciptakan kondisi mikro yang ideal bagi tanaman",
    image:artikel2,
  },
  {
    id: 6,
    title: "Cara menanam Selada Hidroponik",
    description: "ingin menanam selada hidroponik sendiri di rumah?",
    image:artikel6,
  },
  

];


const Card = () => {
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

export default Card;
