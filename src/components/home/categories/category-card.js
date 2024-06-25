const CategoryCard = ({ category }) => {
  return (
    <div
      className={`p10 group flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white px-10 pb-8 pt-10 transition-transform duration-300 ease-in-out`}
    >
      <img
        src={category.metadata.images ? category.metadata.images : ''}
        alt={category.name}
        loading={'lazy'}
        className={`h-32 w-32 rounded-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105`}
      />
      <h2 className={`mt-5 text-center text-base font-semibold text-fourth`}>
        {category.name}
      </h2>
      <span className={'text-sm text-secondary'}>
        {category.products.length < 10
          ? `0${category?.products?.length}`
          : category?.products?.length}{' '}
        sản phẩm
      </span>
    </div>
  );
};

export default CategoryCard;
