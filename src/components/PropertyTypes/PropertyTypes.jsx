import { motion } from "framer-motion";

const propertyTypes = [
  {
    title: "Sea Facing",
    image:
      "https://images.pexels.com/photos/4321422/pexels-photo-4321422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Exclusive Villa",
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Sky-High",
    image:
      "https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Duplex",
    image:
      "https://images.pexels.com/photos/9892600/pexels-photo-9892600.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const PropertyTypes = () => {
  return (
    <section className="relative py-20 px-6 lg:px-16">
      {/* text matter */}

      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-[#ffd586]"
        >
          Discover Our Premium Properties
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg text-gray-300"
        >
          Explore the most exclusive residences in South Mumbai
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {propertyTypes.map((property, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              {property.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
