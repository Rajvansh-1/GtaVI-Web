import React from 'react';

const fanArtImages = [
  '/images/fan-art-1.webp',
  '/images/fan-art-2.webp',
  '/images/fan-art-3.webp',
  '/images/fan-art-4.webp',
  '/images/fan-art-5.webp',
  '/images/fan-art-6.webp',
];

const FanArt = () => {
  return (
    <section className="fan-art-gallery py-20">
      <h2 className="text-center text-6xl font-long text-yellow uppercase tracking-widest mb-10">
        Fan Art Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fanArtImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Fan Art ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FanArt;