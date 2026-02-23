export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold mb-12">Events</h1>

      <div className="space-y-8">

        {/* Event 1 */}
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition p-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="bg-gray-100 rounded-2xl w-28 h-28 flex flex-col justify-center items-center">
              <span className="text-sm font-medium text-gray-500">
                TODAY
              </span>
              <span className="text-3xl font-bold">
                17:00
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Bergen International Film Festival
              </h2>
              <p className="text-gray-500 mt-2 max-w-md">
                Films from around the world bring together cinema lovers for a unique experience.
              </p>
            </div>
          </div>

          <button className="text-sm font-semibold text-gray-600 hover:text-black transition">
            + Add to calendar
          </button>
        </div>

        {/* Event 2 */}
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition p-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="bg-purple-100 rounded-2xl w-28 h-28 flex flex-col justify-center items-center">
              <span className="text-sm font-medium text-purple-600">
                22 - 31 OCT
              </span>
              <span className="text-3xl font-bold text-purple-700">
                10:00
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Wool Week
              </h2>
              <p className="text-gray-500 mt-2 max-w-md">
                ULLVEKA 2021 will take place from October 22 to 31 across the Bergen region.
              </p>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            + Add to calendar
          </button>
        </div>

        {/* Event 3 */}
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition p-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="bg-pink-100 rounded-2xl w-28 h-28 flex flex-col justify-center items-center">
              <span className="text-sm font-medium text-pink-600">
                22 - 31 OCT
              </span>
              <span className="text-3xl font-bold text-pink-700">
                19:00
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Light Park at Bergenhus Fortress
              </h2>
              <p className="text-gray-500 mt-2 max-w-md">
                LUMAGICA offers a magical light experience for visitors of all ages.
              </p>
            </div>
          </div>

          <button className="text-sm font-semibold text-gray-600 hover:text-black transition">
            + Add to calendar
          </button>
        </div>

        {/* Event 4 */}
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition p-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="bg-green-100 rounded-2xl w-28 h-28 flex flex-col justify-center items-center">
              <span className="text-sm font-medium text-green-600">
                13 - 31 DEC
              </span>
              <span className="text-3xl font-bold text-green-700">
                10:00
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Gingerbread City 2021
              </h2>
              <p className="text-gray-500 mt-2 max-w-md">
                The world’s largest gingerbread town located in the center of Bergen.
              </p>
            </div>
          </div>

          <button className="text-sm font-semibold text-gray-600 hover:text-black transition">
            + Add to calendar
          </button>
        </div>

      </div>
    </main>
  );
}