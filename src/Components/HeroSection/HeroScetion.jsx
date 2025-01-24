export default function HeroScetion() {
  return (
    <section className=" py-12 flex flex-row flex-wrap gap-6 md:gap-0 ">
      <div className=" w-full md:w-8/12">
        <div className="container mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Buy Memes. <br /> In Two Clicks.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            The fastest way to buy memes in just two clicks. <br />
            Under 1 minute to sign up and no wallet needed.
          </p>
        </div>

        <div className="container mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-green-500 w-3 h-3 rounded-full mr-3"></div>
            <div>
              <p className="text-sm text-gray-500">Total users</p>
              <div className="flex items-center mt-1">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                    alt="User 1"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User 2"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/30.jpg"
                    alt="User 3"
                  />
                </div>
                <span className="text-xl font-bold ml-3">52,630</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-green-500 w-3 h-3 rounded-full mr-3"></div>
            <div>
              <p className="text-sm text-gray-500">Trade volume</p>
              <p className="text-xl font-bold mt-1">$1,288,314,266</p>
            </div>
          </div>
        </div>
      </div>

      <div className="  w-full md:w-4/12  shadow-lg  flex flex-col  rounded-md overflow-hidden   ">
        <img
          src="https://img.freepik.com/free-vector/modern-web-design-concept-with-flat-style_23-2147935850.jpg?t=st=1737624247~exp=1737627847~hmac=5b3590cb767fc50153b38d718f5ae77fc02bec050915a2394824c42e9b54e608&w=740"
          className="h-44 w-full object-cover "
        />

        <div className="mt-8 px-2 ">
          <h2 className="text-lg font-bold ">VIRTUAL</h2>
          <div className="flex justify-between ">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-lg font-bold">$2.74</p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-center -mt-5 ">
                <span>▲</span>
                <p className="ml-1 text-green-600 text-sm font-bold">0.59%</p>
              </div>
              <p className="text-sm text-gray-500">Market Cap</p>
              <p className="text-lg font-bold">$1.7B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
