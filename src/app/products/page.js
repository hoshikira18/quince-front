import { Anchor, Breadcrumbs } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const Products = async () => {
  return (
    <div className={'mx-auto min-h-screen max-w-screen-2xl'}>
      <div className={'my-3'}>
        <Breadcrumbs
          separator="/"
          separatorMargin="md"
          mt="xs"
          className={'flex space-x-1 text-sm'}
        >
          {items}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Products;
