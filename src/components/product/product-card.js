import { formatNumber } from '@/lib/utils';
import { Button } from '@/components/common/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className={'group relative z-10'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="top-0 z-10 mx-3 overflow-hidden rounded-md bg-white">
        <a href={`/product/${product.id}`} className={'overflow-hidden'}>
          <img
            src={product.thumbnail}
            alt={product.title}
            loading={'lazy'}
            className="h-60 w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
        </a>
        <div className="px-6 py-5">
          <h2 className="text-base font-semibold text-fourth transition-all duration-500 hover:text-primary">
            <a href={`/product/${product.id}`}>{product.title}</a>
          </h2>
          <p className="mt-2 font-semibold text-red-500">
            {formatNumber(product?.variants[0]?.prices[0]?.amount)} VNĐ
          </p>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          exit={{ opacity: 0 }}
          className={
            'mx-3 -translate-y-10 rounded-b-md bg-white px-6 pb-6 transition-all duration-500 group-hover:translate-y-0'
          }
        >
          <Button variant={'secondary'} size={'lg'} className={'w-full'}>
            Thêm vào giỏ hàng
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;
