const BreadCrumb = ({ data }) => {
  const sampleData = [
    {
      label: 'Trang chủ',
      url: '/',
    },
    {
      label: 'Sản phẩm',
      url: '/products',
    },
  ];
  return (
    <div>
      <ul>
        {sampleData?.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={'block'}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
