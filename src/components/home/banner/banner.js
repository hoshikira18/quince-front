'use client';
import { Carousel } from '@mantine/carousel';

const Banner = ({ collections }) => {
  return (
    <div className="banner">
      <Carousel height={200}>
        {collections?.map(collection => {
          return (
            <Carousel.Slide key={collection.id}>
              <img
                src={
                  collection.metadata.image_url
                    ? collection.metadata.image_url
                    : ''
                }
                loading={'lazy'}
                alt={collection.title}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
