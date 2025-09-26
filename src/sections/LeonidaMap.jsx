import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const hotspots = [
  {
    id: 1,
    name: 'Vice City',
    description: 'The bustling, neon-soaked metropolis at the heart of Leonida.',
    image: '/images/vice-city.webp',
    position: { x: '55%', y: '60%' },
  },
  {
    id: 2,
    name: 'Gator Keys',
    description: 'A chain of small islands and swamps, teeming with wildlife.',
    image: '/images/gator-keys.webp',
    position: { x: '40%', y: '80%' },
  },
  {
    id: 3,
    name: 'The Everglades',
    description: 'A vast and dangerous wetland, home to alligators and other creatures.',
    image: '/images/everglades.webp',
    position: { x: '70%', y: '40%' },
  },
];

const LeonidaMap = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  useGSAP(() => {
    gsap.from('.hotspot', {
      scale: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.leonida-map',
        start: 'top center',
      },
    });
  });

  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot);
    gsap.fromTo(
      '.hotspot-card',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power4.out' }
    );
  };

  const handleCloseCard = () => {
    gsap.to('.hotspot-card', {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: 'power4.in',
      onComplete: () => setActiveHotspot(null),
    });
  };

  return (
    <section className="leonida-map relative w-dvw h-dvh flex-center">
      <h2 className="absolute top-20 text-6xl font-long text-yellow uppercase tracking-widest">
        Explore Leonida
      </h2>
      <div className="relative w-full h-full">
        <img
          src="/images/leonida-map.webp"
          alt="Map of Leonida"
          className="w-full h-full object-contain"
        />
        {hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="hotspot absolute w-8 h-8 bg-red-500 rounded-full cursor-pointer flex-center"
            style={{ top: hotspot.position.y, left: hotspot.position.x }}
            onClick={() => handleHotspotClick(hotspot)}
          >
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        ))}
      </div>
      {activeHotspot && (
        <div className="hotspot-card absolute inset-0 bg-black bg-opacity-70 flex-center">
          <div className="bg-white rounded-lg overflow-hidden w-96">
            <img
              src={activeHotspot.image}
              alt={activeHotspot.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{activeHotspot.name}</h3>
              <p className="text-gray-700">{activeHotspot.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
                onClick={handleCloseCard}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeonidaMap;