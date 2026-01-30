import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const WhyAdopt = () => {
  const reasons = [
    {
      icon: "❤️",
      title: "Save a Life",
      desc: "By adopting, you give a homeless pet a second chance at a happy life.",
    },
    {
      icon: "🏠",
      title: "Reduce Homelessness",
      desc: "Adoption helps reduce the number of pets living on the streets or shelters.",
    },
    {
      icon: "🐕",
      title: "Find a Loyal Friend",
      desc: "Adopted pets are often the most loving and loyal companions.",
    },
    {
      icon: "🌍",
      title: "Support Ethical Choices",
      desc: "Adopting means saying no to illegal breeding and pet exploitation.",
    },
  ];

  return (
    <div>
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Adopt from PawMart?</h2>
          </motion.div>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Adopting a pet is not just about bringing home an animal — it’s
            about saving lives, spreading love, and making a kind choice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAdopt;
