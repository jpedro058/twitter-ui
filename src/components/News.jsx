import { repeatComponent } from "repeat-component";

export function News() {
  return (
    <div className="flex flex-col mt-4  px-4">
      <div className="flex flex-col bg-zinc-800/70 rounded-2xl ">
        <div className="ps-4 py-4">
          <h2 className="text-white text-xl font-extrabold">News</h2>
        </div>
        {repeatComponent(
          () => (
            <div className="flex gap-2 px-4 py-3 border-t border-zinc-500/50 relative">
              <div className="flex flex-col ">
                <p className="text-zinc-400 text-base">Trending in Portugal</p>
                <h2 className="text-white text-lg font-bold">
                  Things and Stuffs
                </h2>
              </div>
            </div>
          ),
          3
        )}
      </div>
    </div>
  );
}
