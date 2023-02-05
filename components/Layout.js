/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - IOShop' : 'IOShop'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="  flex min-h-screen flex-col justify-between ">
        <header>
          {/* Header */}
          <nav className="flex gap-x-6 lg:gap-x-0  h-24 border-b items-center px-2 md:px-16  justify-between ">
            {/* Header Icons */}
            <div className="flex gap-x-1 md:gap-x-3 lg:gap-x-4 ">
              <div className="flex justify-center text-center items-center border border-gray-700 rounded-lg lg:p-1 hover:font-semibold ">
                <img className="w-6 h-6" src="/icon/buy.png" alt="buy-logo" />
                <Link
                  className=" text-[10px] w-16 md:p-2 lg:w-auto lg:h-auto  lg:text-sm lg:p-1 "
                  href="/"
                >
                  سبد خرید
                </Link>
              </div>
              <div className="flex justify-center text-center items-center border border-gray-700 rounded-lg hover:font-semibold">
                <img
                  className="w-6 h-6"
                  src="/icon/profile.png"
                  alt="but-logo"
                />
                <Link
                  className="text-[10px] w-20 lg:w-auto lg:h-auto lg:text-sm lg:p-1"
                  href="/"
                >
                  ورود/ثبت نام
                </Link>
              </div>
            </div>
            {/* Search Box */}
            <div className="flex lg:gap-x-16 ">
              <div className="relative">
                <div className="relative flex  justify-center items-center w-full">
                  <div className="absolute  right-2  items-center  pointer-events-none">
                    <img
                      src="icon/search.png"
                      className="w-4 h-4"
                      alt="serach-logo"
                    />
                  </div>
                  <div>
                    <input
                      dir="rtl"
                      id=""
                      type="text"
                      className="placeholder-gray-600 pb-1 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg   w-full pr-6 md:pl-24 lg:pr-7 lg:pl-28 lg:p-1.5 lg:pb-2 lg:text-base "
                      // className="placeholder-gray-600 pb-2 pr-7 bg-gray-200 border border-gray-300 text-gray-900 text-base rounded-lg   w-full lg:pl-28 p-1 lg:p-1.5 "
                      placeholder="جست و جو"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Logo Icon */}
              <div className="hidden lg:block">
                <Link className="text-lg font-bold" href="/">
                  icon
                </Link>
              </div>
            </div>
          </nav>
          {/* Filter Header */}
          <nav className=" h-0 flex items-center text-sm  lg:border-b lg:h-9 ">
            <div className="hidden w-full lg:block">
              <div className="flex w-full justify-between items-center lg:px-64">
                <div className="w-auto gap-x-1 flex cursor-pointer text-center text-gray-600 hover:text-black ">
                  <div>ثبت فروشگاه</div>
                  <div className="">
                    <img
                      src="/icon/store.png"
                      alt="store-icon"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <div className="w-auto gap-x-1 flex cursor-pointer text-center text-gray-600 hover:text-black">
                  <div>پیشنهادی ها</div>
                  <div>
                    <img
                      src="/icon/suggest.png"
                      alt="store-icon"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <div className="w-auto gap-x-1 flex cursor-pointer text-center text-gray-600 hover:text-black">
                  <div>تخفیفات ویژه</div>
                  <div>
                    <img
                      src="/icon/discount.png"
                      alt="store-icon"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <div className="w-auto gap-x-1 flex cursor-pointer text-center text-gray-600 hover:text-black">
                  <div>پرفروش ها</div>
                  <div>
                    <img
                      src="/icon/fire.png"
                      alt="store-icon"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <div className="w-auto gap-x-1 flex cursor-pointer text-center text-gray-600 hover:text-black">
                  <div>دسته بندی کالا ها</div>
                  <div>
                    <img
                      src="/icon/list.png"
                      alt="store-icon"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* Body */}
        <main className="container flex-grow ">{children}</main>
        {/* Footer */}
        <footer className="flex bg-red-500 bottom-0 h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023 IO-TEAM</p>
        </footer>
      </div>
    </>
  );
}
