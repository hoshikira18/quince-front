'use client';
import ProductCard from '@/components/product/product-card';
import { Carousel } from '@mantine/carousel';

const ProductsSlide = ({ products }) => {
  return (
    <div className={'my-5 mt-10'}>
      <Carousel
        slideSize={{
          base: '100%',
          sm: '50%',
          md: '33%',
          lg: '25%',
          xl: '20%',
        }}
        align={'start'}
        className={'relative z-10 px-10'}
      >
        {products?.map(product => {
          return (
            <Carousel.Slide key={product.id}>
              <ProductCard product={product} />
            </Carousel.Slide>
          );
        })}
        <Carousel.Slide>
          <div
            className={
              'flex h-[400px] w-full cursor-pointer items-center justify-center rounded-md bg-white transition-all duration-300 hover:bg-primary hover:text-white'
            }
          >
            {products?.length === 0 ? 'Không có sản phẩm nào' : 'Xem thêm'}
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default ProductsSlide;
