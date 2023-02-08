import Image from 'next/image';

const products = () => {
  return (
    <section className="max-w-sm mt-2 md:max-w-2xl lg:max-w-7xl m-auto">
      <div className="grid grid-cols-3  gap-2 ">
        <div className="h-auto w-auto bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div>
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
        <div className="h-auto w-auto  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div>
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
        <div className="h-auto w-auto  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div>
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
        <div className="h-auto w-auto  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div>
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
        <div className="h-auto w-auto  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div>
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
        <div className="h-auto w-auto  bg-gray-100 shadow rounded-md ">
          <div className="flex justify-start items-start bg-red-600 text-sm text-center rounded-md h-auto w-11">
            %200
          </div>
          <div>
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
