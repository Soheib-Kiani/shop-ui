import Image from 'next/image';

/* eslint-disable @next/next/no-img-element */
const category = () => {
  return (
    <section className="grid grid-cols-5 place-items-center max-w-7xl m-auto">
      <div className="w-14 h-14 md:w-24 md:h-24  text-center rounded-lg ">
        <div className="w-full h-3/4 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat1.png'}
          />
          {/* When true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority. */}
        </div>
        <div>cat1</div>
      </div>
      <div className="w-14 h-14 md:w-24 md:h-24  rounded-lg text-center ">
        <div className="w-full h-3/4 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat1.png'}
          />
        </div>
        <div>cat2</div>
      </div>
      <div className="w-14 h-14 md:w-24 md:h-24  rounded-lg text-center ">
        <div className="w-full h-3/4 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat3.png'}
          />
        </div>
        <div>cat 3</div>
      </div>
      <div className="w-14 h-14 md:w-24 md:h-24  rounded-lg text-center ">
        <div className="w-full h-3/4 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat5.png'}
          />
        </div>
        <div>cat 4</div>
      </div>
      <div className="w-14 h-14 md:w-24 md:h-24  rounded-lg text-center ">
        <div className="w-full h-3/4 rounded-t-lg ">
          <Image
            width={100}
            height={100}
            priority={true}
            alt="category-picture"
            src={'/photo/cat5.png'}
          />
        </div>
        <div>cat 5</div>
      </div>
    </section>
  );
};

export default category;
