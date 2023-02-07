import Image from 'next/image';

const brand = () => {
  return (
    <section>
      <p className=' mt-4 grid place-items-center text-xs font-semibold'>محبوب ترین برند ها</p>
      <div className="w-full h-auto  shadow-md rounded-xl flex items-center justify-between px-5 ">
        <div className="w-14 h-14 grid place-items-center object-fit text-center">
          <Image
            width={100}
            height={100}
            priority={false}
            alt="category-picture"
            src={'/photo/brand1.png'}
          />
        </div>
        <div className="w-14 h-14 grid place-items-center  text-center">
          <Image
            width={100}
            height={100}
            priority={false}
            alt="category-picture"
            src={'/photo/brand2.png'}
          />
        </div>
        <div className="w-14 h-14  grid place-items-center text-center">
          <Image
            width={100}
            height={100}
            priority={false}
            alt="category-picture"
            src={'/photo/brand3.png'}
          />
        </div>
        <div className="w-14 h-14 grid place-items-center  text-center">
          <Image
            width={100}
            height={100}
            priority={false}
            alt="category-picture"
            src={'/photo/brand4.png'}
          />
        </div>
      </div>
    </section>
  );
};

export default brand;
