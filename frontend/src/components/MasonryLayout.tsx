import Image from 'next/image';
import React from 'react';

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
];

const MasonryLayout: React.FC = () => {
  return (
    <div className="columns-3 mx-auto space-y-4 gap-4 p-20">
      {images.map((src, index) => (
        <div key={index} className="break-inside-avoid">
          <div>
            <Image
              className="h-[80px] w-[100px]"
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
