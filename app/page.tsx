export default function Home() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10">Events</h1>

      <div className="space-y-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="bg-gray-100 rounded-xl p-4 text-center w-24">
              <p className="text-sm font-semibold">TODAY</p>
              <p className="text-2xl font-bold">17:00</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Bergen International Film Festival
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Films from all over the world gather all film enthusiasts.
              </p>
            </div>
          </div>

          <button className="text-sm font-semibold">
            + Add to calendar
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="bg-purple-100 rounded-xl p-4 text-center w-24">
              <p className="text-sm font-semibold">22 - 31 OCT</p>
              <p className="text-2xl font-bold">10:00</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Wool week</h2>
              <p className="text-gray-500 text-sm mt-1">
                ULLVEKA 2021 will be held 22 - 31 October.
              </p>
            </div>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            + Add to calendar
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="bg-pink-100 rounded-xl p-4 text-center w-24">
              <p className="text-sm font-semibold">22 - 31 OCT</p>
              <p className="text-2xl font-bold">19:00</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Light park at Bergenhus Fortress
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                LUMAGICA - a magical experience for young and old.
              </p>
            </div>
          </div>

          <button className="text-sm font-semibold">
            + Add to calendar
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="bg-green-100 rounded-xl p-4 text-center w-24">
              <p className="text-sm font-semibold">13 - 31 DEC</p>
              <p className="text-2xl font-bold">10:00</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Gingerbread City 2021
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                The world's largest Gingerbread Town in Bergen.
              </p>
            </div>
          </div>

          <button className="text-sm font-semibold">
            + Add to calendar
          </button>
        </div>

      </div>
    </main>
  );
}