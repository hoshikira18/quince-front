import Banner from '@/components/home/banner/banner';
import {
  getCategories,
  getCategoryId,
  getCollections,
  getProducts,
} from '@/lib/data';
import Categories from '@/components/home/categories/categories';
import About from '@/components/home/about';
import NewProducts from '@/components/home/new-products/new-products';
import Material from '@/components/home/material';

const Home = async () => {
  const products = await getProducts(12);
  const collections = await getCollections();
  const tenCelCategoryId = await getCategoryId('tencel');
  const cottonCategoryId = await getCategoryId('cotton');

  const tenCelProducts = await getProducts(12, [tenCelCategoryId]);
  const cottonProducts = await getProducts(12, [cottonCategoryId]);

  const mainCategories = await getCategories().then(categories => {
    return categories.filter(
      category => category.metadata?.main_display === true
    );
  });

  return (
    <main className="flex min-h-screen flex-col space-y-16 bg-third">
      <Banner collections={collections} />
      <Categories categories={mainCategories} />
      <NewProducts products={products?.products} />
      <About />
      <Material
        tenCelProducts={tenCelProducts ? tenCelProducts : []}
        cottonProducts={cottonProducts ? cottonProducts : []}
      />
    </main>
  );
};

export default Home;
