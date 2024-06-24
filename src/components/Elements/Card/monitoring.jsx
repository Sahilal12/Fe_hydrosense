import Button from "../Button";
import monitor1 from "../../../assets/monitor1.jpg";
import monitor2 from "../../../assets/monitor2.jpg";
import monitor3 from "../../../assets/monitor3.jpg";
import monitor4 from "../../../assets/monitor4.jpg";
import monitor5 from "../../../assets/monitor5.jpg";
import monitor6 from "../../../assets/monitor6.jpg";

const cardJson = [
  {
    id: 1,
    title: "Cabai",
    description: "Cabai merah keriting merupakan salah satu jenis tanaman cabai-cabaian yang berbentuk panjang dan ramping namun memiliki",
    image:monitor1,
  },
  {
    id: 2,
    title: "Kangkung",
    description: "Kangkung adalah tumbuhan yang tumbuh di air atau tanah yang lembab. Kangkung biasanya memiliki batang dengan ukuran",
    image:monitor2,
  },
  {
    id: 3,
    title: "Selada",
    description: "Selada adalah tumbuhan sayur yang biasa ditanam di daerah beriklim sedang maupun daerah tropika. Selada digunakan dalam berbagai",
    image:monitor3,
  },
  {
    id: 4,
    title: "Bawang merah",
    description: "Bawang merah adalah salah satu bumbu masak utama dunia yang berasal dari Iran, Pakistan, tetapi kemudian menyebar ke",
    image:monitor4,
  },
  {
    id: 5,
    title: "Daun Bawang ",
    description: "Daun bawang termasuk jenis tanaman sayuran daun semusim. Tanaman ini berbentuk rumput dengan tinggi tanaman mencapai ...",
    image:monitor5,
  },
  {
    id: 6,
    title: "Tomat ",
    description: "Tomat adalah tanaman yangg dapat ditanam secara luas didataran rendah sampai dataran tinggi, pada lahan bekas sawah dan lahan ...",
    image:monitor6,
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
