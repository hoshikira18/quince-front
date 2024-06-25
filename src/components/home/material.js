'use client';
import SectionHeader from '@/components/common/section-header';
import ProductsSlide from '@/components/home/new-products/products-slide';
import React, { useState } from 'react';

const Material = ({ tenCelProducts, cottonProducts }) => {
  const [material, setMaterial] = useState('tencel');
  return (
    <div className={'relative h-[650px]'}>
      <SectionHeader title={'Chọn sản phẩm theo chất liệu bạn quan tâm'} />
      <div className={'flex justify-center space-x-5 font-medium text-fourth'}>
        <div
          className={`${material === 'tencel' ? 'text-primary' : ''} group cursor-pointer flex-col`}
          onClick={() => setMaterial('tencel')}
        >
          <div>Tencel</div>
          <div
            className={`h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full`}
          ></div>
        </div>
        <div
          className={`${material === 'cotton' ? 'text-primary' : ''} group cursor-pointer flex-col`}
          onClick={() => setMaterial('cotton')}
        >
          <div>Cotton</div>
          <div
            className={`h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full`}
          ></div>
        </div>
      </div>
      <ProductsSlide
        products={
          material === 'tencel'
            ? tenCelProducts?.products
            : material === 'cotton'
              ? cottonProducts?.products
              : null
        }
      />
    </div>
  );
};

export default Material;
