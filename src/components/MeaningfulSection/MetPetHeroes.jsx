import React from "react";

const MetPetHeroes = () => {
     const heroes = [
    {
      name: "Ayesha Rahman",
      role: "Pet Adopter",
      image: "https://i.ibb.co/4pDNDk1/user1.jpg",
      quote: "Adopting from PawMart changed my life and gave my cat a loving home.",
    },
    {
      name: "Rahim Uddin",
      role: "Animal Caregiver",
      image: "https://i.ibb.co/4pDNDk1/user2.jpg",
      quote: "I love helping rescued pets find families through PawMart.",
    },
    {
      name: "Nusrat Jahan",
      role: "Pet Foster Parent",
      image: "https://i.ibb.co/4pDNDk1/user3.jpg",
      quote: "Fostering pets is my passion. PawMart makes it easy to connect.",
    },
    {
      name: "Tanvir Hasan",
      role: "Volunteer",
      image: "https://i.ibb.co/4pDNDk1/user4.jpg",
      quote: "Seeing adopted pets go to happy homes is the best feeling!",
    },
  ];
  return (
    <div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Meet Our Pet Heroes</h2>
            <p className="text-gray-600 mt-2">
              Real people making a real difference for pets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroes.map((hero, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold">{hero.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {hero.role}
                  </p>
                  <p className="text-sm text-gray-500 mt-3 italic">
                    “{hero.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetPetHeroes;
