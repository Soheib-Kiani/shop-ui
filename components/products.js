/* eslint-disable @next/next/no-img-element */

const products = () => {
  return (
    <section className="max-w-sm mt-3 md:max-w-2xl lg:max-w-7xl m-auto">
      <div className="grid grid-cols-3 lg:grid-cols-4  md:place-items-center lg:place-items-center  gap-6 ">
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
          <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -20%
          </div>
          <div className="p-1 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product1.png"
            />
          </div>
          <p className="grid place-items-center font-medium">15000$</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
          <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -30%
          </div>
          <div className="p-1 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product2.png"
            />
          </div>
          <p className="grid place-items-center font-medium">13500</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
          <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -10%
          </div>
          <div className="p-1 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product1.png"
            />
          </div>
          <p className="grid place-items-center font-medium">54000</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
          <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -40%
          </div>
          <div className="p-1 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product2.png"
            />
          </div>
          <p className="grid place-items-center font-medium">78000</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
          <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -30%
          </div>
          <div className="p-1 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product2.png"
            />
          </div>
          <p className="grid place-items-center font-medium">60000</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
          <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -20%
          </div>
          <div className="p-1 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product1.png"
            />
          </div>
          <p className="grid place-items-center font-medium">64580</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
          <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -25%
          </div>
          <div className="p-1 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product2.png"
            />
          </div>
          <p className="grid place-items-center font-medium">45000</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56   bg-gray-100 shadow rounded-md ">
        <div className="m-2 text-center bg-red-500 text-sm  rounded-md h-auto w-11 ">
            -13%
          </div>
          <div className="p-1 md:p-2 md:grid md:place-items-center">
            <img
              className="h-full w-full"
              loading="lazy"
              alt="category-picture"
              src="/photo/product1.png"
            />
          </div>
          <p className="grid place-items-center font-medium">12000</p>
          <p className="grid place-items-center font-bold md:pb-1">Iphone 5</p>
        </div>
      </div>
    </section>
  );
};

export default products;
