import Image from 'next/image';

const products = () => {
  return (
    <section className="max-w-sm mt-3 md:max-w-2xl lg:max-w-7xl m-auto">
      <div className="grid grid-cols-3 md:place-items-center  gap-6 ">
        <div className="h-auto w-auto md:w-44   bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11 ">
            %200
          </div>
          <div className='p-2 md:p-4 md:grid md:place-items-center'>
            <Image
              width={100}
              height={100}
              priority={false}
              alt="category-picture"
              src={'/photo/product1.png'}
            />
          </div>
          <p className="grid place-items-center">9586</p>
          <p className="grid place-items-center">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 p-2 md:p-4  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div className='md:grid md:place-items-center'>
            <Image
              width={100}
              height={100}
              priority={false}
              alt="category-picture"
              src={'/photo/product2.png'}
            />
          </div>
          <p className="grid place-items-center">9586</p>
          <p className="grid place-items-center">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 p-2 md:p-4  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div className='md:grid md:place-items-center'>
            <Image
              width={100}
              height={100}
              priority={false}
              alt="category-picture"
              src={'/photo/product1.png'}
            />
          </div>
          <p className="grid place-items-center">9586</p>
          <p className="grid place-items-center">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 p-2 md:p-4  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div className='md:grid md:place-items-center'>
            <Image
              width={100}
              height={100}
              priority={false}
              alt="category-picture"
              src={'/photo/product2.png'}
            />
          </div>
          <p className="grid place-items-center">9586</p>
          <p className="grid place-items-center">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 p-2 md:p-4  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div className='md:grid md:place-items-center'>
            <Image
              width={100}
              height={100}
              priority={false}
              alt="category-picture"
              src={'/photo/product1.png'}
            />
          </div>
          <p className="grid place-items-center">9586</p>
          <p className="grid place-items-center">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 p-2 md:p-4  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div className='md:grid md:place-items-center'>
            <Image
              width={100}
              height={100}
              priority={false}
              alt="category-picture"
              src={'/photo/product2.png'}
            />
          </div>
          <p className="grid place-items-center">9586</p>
          <p className="grid place-items-center">Iphone 5</p>
        </div>
      </div>
    </section>
  );
};

export default products;
