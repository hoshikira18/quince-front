'use client';
import React from 'react';
import {
  DownOutlined,
  MenuOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import Dropdown from '@/components/common/dropdown';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/common/sheet';
import Link from 'next/link';

const Navigation = ({ collections }) => {
  const [toggle, setToggle] = React.useState('hidden');
  const [isHovered, setHovered] = React.useState(false);

  const navItems = [
    {
      name: 'Trang chủ',
      url: '/',
    },
    {
      name: 'Mua hàng ngay',
      url: 'products',
    },
    {
      name: 'Bộ sưu tập',
      url: '#',
      data: collections?.map(collection => {
        return {
          title: collection.title,
          href: '/collections/' + collection.id,
        };
      }),
    },
    {
      name: 'Hàng mới về',
      url: '#',
    },
    {
      name: 'Bộ chăn gối',
      url: '#',
    },
    {
      name: 'Sản phẩm khách sạn',
      url: '#',
    },
    {
      name: 'Blog',
      url: '#',
    },
  ];

  const toggleMenu = () => {
    if (toggle === 'hidden') {
      setToggle('flex');
    } else {
      setToggle('hidden');
    }
  };
  return (
    <nav
      className={`sticky top-0 z-50 mx-auto flex h-full max-w-screen-2xl flex-wrap items-center justify-between px-5`}
    >
      <div onClick={toggleMenu} className={`cursor-pointer lg:hidden`}>
        <MenuOutlined style={{ fontSize: '150%' }} />
      </div>
      <img
        src="./logo.png"
        alt="logo"
        className="h-10 transition-all duration-500 lg:h-16"
      />
      <ul
        className={`fixed left-0 right-0 top-16 h-full animate-fadeIn flex-col space-y-5 bg-secondary p-5 md:right-40 lg:relative lg:top-0 lg:animate-none lg:flex-row lg:space-y-0 lg:p-0 ${toggle} items-start text-base font-semibold text-green-900 transition-all duration-500 lg:flex lg:space-x-8 lg:bg-white lg:text-base`}
      >
        {navItems.map(item => {
          return (
            <li
              key={item.name}
              className={'group flex h-full items-center lg:py-6'}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                href={item.url}
                className={'block h-full group-hover:text-primary'}
              >
                {item.name}
              </Link>
              {item.data && (
                <DownOutlined
                  style={{ fontSize: '80%' }}
                  className={
                    'pl-1 font-bold text-fourth group-hover:text-primary'
                  }
                />
              )}
              <div
                className={
                  'absolute top-full hidden group-hover:block lg:animate-visible'
                }
              >
                {item.data && <Dropdown data={item.data} isOpen={isHovered} />}
              </div>
            </li>
          );
        })}
      </ul>
      <div className={`flex space-x-3`}>
        <Sheet>
          <SheetTrigger>
            <div
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary p-1`}
            >
              <ShoppingOutlined style={{ fontSize: '130%' }} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Giỏ hàng của bạn</SheetTitle>
              <SheetDescription>
                Giấc ngủ ngon của bạn, là niềm hạnh phúc của chúng tôi.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
