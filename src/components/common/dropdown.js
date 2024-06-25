import { motion } from 'framer-motion';

const Dropdown = ({ data, isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <ul
        className={`min-w-[240px] space-y-3 rounded-b-md border-t-2 border-primary bg-white px-5 py-3`}
      >
        {data.map(item => {
          return (
            <li
              key={item.title}
              className={
                'w-full font-normal transition-all duration-500 hover:translate-x-3'
              }
            >
              <a href={item.href} className={'block w-full'}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Dropdown;
