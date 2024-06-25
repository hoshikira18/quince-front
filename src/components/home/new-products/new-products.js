import SectionHeader from '@/components/common/section-header';
import ProductsSlide from '@/components/home/new-products/products-slide';

const NewProducts = ({ products }) => {
  return (
    <div className="relative z-10">
      <SectionHeader
        title={'Sản phẩm mới nhất'}
        subTitle={'Đặc biệt'}
        quote={
          'Nâng niu từng giấc mơ với chất lượng vượt trội từ sản phẩm của chúng tôi.'
        }
      />
      <ProductsSlide products={products} />
    </div>
  );
};

export default NewProducts;
