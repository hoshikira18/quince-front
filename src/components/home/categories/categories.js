import CategoryCard from '@/components/home/categories/category-card';

const Categories = ({ categories }) => {
  return (
    <div className={``}>
      <div className={'flex items-center justify-center space-x-10 py-5'}>
        {categories?.map(category => {
          return <CategoryCard key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
