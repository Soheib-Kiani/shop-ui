/* eslint-disable @next/next/no-img-element */
const off = () => {
  return (
    <section className="max-w-sm mt-2 md:max-w-2xl lg:max-w-7xl m-auto">
      <div className=" mt-4 flex justify-center items-center    text-xs md:text-base lg:text-xl font-semibold">
        <p> پروفروش ترین محصولات</p>
        <img
          className="w-5 h-5 lg:w-10 lg:h-10"
          loading="lazy"
          alt="category-picture"
          src="/icon/fire.png"
        />
      </div>
      <div className="grid grid-cols-4 place-items-center">
        <div className="h-auto w-auto md:w-44 lg:w-56">
          <div className="p-1 h-24 md:h-36 bg-yellow-300 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full object-contain"
              loading="lazy"
              alt="category-picture"
              src="/photo/nike.png"
            />
          </div>
          <p className="grid place-items-center h-1/4 text-gray-400 font-bold md:pb-1">
            Iphone 5
          </p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56">
          <div className="p-1 h-24 md:h-36  bg-red-600 md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full object-fill"
              loading="lazy"
              alt="category-picture"
              src="/photo/cat5.png"
            />
          </div>
          <p className="grid place-items-center h-1/4 text-gray-400 font-bold md:pb-1">
            Iphone 5
          </p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56">
          <div className="p-1 h-24 md:h-36  md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full object-contain"
              loading="lazy"
              alt="category-picture"
              src="/photo/cat1.png"
            />
          </div>
          <p className="grid place-items-center h-1/4 text-gray-400 font-bold md:pb-1">
            Iphone 5
          </p>
        </div>
        <div className="h-auto w-auto md:w-44 lg:w-56">
          <div className="p-1 h-24 md:h-36  md:p-2  md:grid md:place-items-center">
            <img
              className="h-full w-full object-contain"
              loading="lazy"
              alt="category-picture"
              src="/photo/cat3.png"
            />
          </div>
          <p className="grid place-items-center h-1/4 text-gray-400 font-bold md:pb-1">
            Iphone 5
          </p>
        </div>
      </div>
    </section>
  );
};

export default off;
