import Image from 'next/image';

/* eslint-disable @next/next/no-img-element */
const category = () => {
  return (
    <section className="grid mt-1 grid-cols-5 place-items-center max-w-sm md:max-w-2xl lg:max-w-7xl m-auto">
      <div className="w-16 h-20  md:w-24 md:h-24 lg:h-32 lg:w-32 shadow  text-center rounded-lg ">
        <div className="w-full drop-shadow-xl lg:grid lg:place-items-center h-1/2 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat1.png'}
          />
          {/* When true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority. */}
        </div>
        <div className='pt-3.5 md:pt-6 text-xs md:text-sm lg:text-base font-medium'>آرایشی</div>
      </div>
      <div className="w-16 h-20  md:w-24 md:h-24 lg:h-32 lg:w-32 shadow  text-center rounded-lg ">
        <div className="w-full drop-shadow-xl lg:grid lg:place-items-center h-1/2 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat1.png'}
          />
          {/* When true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority. */}
        </div>
        <div className='pt-3.5 md:pt-6 text-xs md:text-sm lg:text-base font-semibold'>آرایشی</div>
      </div>
      <div className="w-16 h-20  md:w-24 md:h-24 lg:h-32 lg:w-32 shadow  text-center rounded-lg ">
        <div className="w-full drop-shadow-xl lg:grid lg:place-items-center h-1/2 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat3.png'}
          />
          {/* When true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority. */}
        </div>
        <div className='pt-3.5 md:pt-6 text-xs md:text-sm lg:text-base font-semibold'>آرایشی</div>
      </div>
      <div className="w-16 h-20  md:w-24 md:h-24 lg:h-32 lg:w-32 shadow  text-center rounded-lg ">
        <div className="w-full drop-shadow-xl lg:grid lg:place-items-center h-1/2 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat3.png'}
          />
          {/* When true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority. */}
        </div>
        <div className='pt-3.5 md:pt-6 text-xs md:text-sm lg:text-base font-semibold'>آرایشی</div>
      </div>
      <div className="w-16 h-20  md:w-24 md:h-24 lg:h-32 lg:w-32 shadow  text-center rounded-lg ">
        <div className="w-full drop-shadow-xl lg:grid lg:place-items-center h-1/2 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat5.png'}
          />
          {/* When true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority. */}
        </div>
        <div className='pt-3.5 md:pt-6 text-xs md:text-sm lg:text-base font-semibold'>آرایشی</div>
      </div>
      
    </section>
  );
};

export default category;
