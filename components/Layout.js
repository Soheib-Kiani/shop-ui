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

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          {/* Header */}
          <nav className="flex h-24 border-b items-center px-16  justify-between ">
            {/* Header Icons */}
            <div className="flex gap-x-4 ">
              <div className="flex p-1 justify-center items-center border border-gray-700 rounded-lg">
                <img className="w-6 h-6" src="/icon/buy.png" alt="but-logo" />
                <Link className="p-1 " href="/">
                  سبد خرید
                </Link>
              </div>
              <div className="flex  justify-center items-center border border-gray-700 rounded-lg">
                <img
                  className="w-6 h-6"
                  src="/icon/profile.png"
                  alt="but-logo"
                />
                <Link className="p-1 " href="/">
                  ورود / ثبت نام
                </Link>
              </div>
            </div>
            {/* Search Box */}
            <div className="flex gap-x-16 ">
              <div className="relative">
                <div className="relative flex justify-center items-center w-full">
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
                      className="placeholder-gray-600 pb-2 pr-7 bg-gray-200 border border-gray-300 text-gray-900 text-base rounded-lg   w-full pl-28 p-1.5 "
                      placeholder="جست و جو"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Logo Icon */}
              <div>
                <Link className="text-lg font-bold" href="/">
                  icon
                </Link>
              </div>
            </div>
          </nav>
          
          <nav className='border-b'>
            part 2
          </nav>
        </header>
        {/* Body */}
        <main className="container m-auto mt-4 px-4">{children}</main>
        {/* Footer */}
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023 IO-TEAM</p>
        </footer>
      </div>
    </>
  );
}
