import { AiOutlineSearch } from "react-icons/ai";
import { repeatComponent } from "repeat-component";
import { News } from "./News";

export function Search() {
  return (
    <div className="flex flex-col w-[30%] z-50 h-screen">
      <form>
        <div className="px-4 pt-4 flex relative items center">
          <AiOutlineSearch className="text-3xl text-zinc-400 absolute left-7 top-6 " />
          <input
            type="text"
            className="w-full bg-zinc-800/70 p-3 pl-14 rounded-full "
            placeholder="Search Twitter"
          />
        </div>
      </form>

      <div className=" no-scrollbar overflow-y-auto  scroll-smooth pb-4">
        <div className="flex flex-col mt-4  px-4">
          <div className="flex flex-col bg-zinc-800/70 rounded-2xl ">
            <div className="ps-4 py-4">
              <h2 className="text-white text-xl font-extrabold">
                You might like
              </h2>
            </div>
            {repeatComponent(
              () => (
                <div className="flex gap-2 px-4 py-3 border-t border-zinc-500/50 relative">
                  <div className="bg-zinc-500 h-14 w-14 rounded-full"></div>
                  <div className="flex flex-col ">
                    <h2 className="text-white  font-bold">Donald J. Trump</h2>
                    <p className="text-zinc-400 text-sm">@realDonaldTrump</p>
                  </div>

                  <button className=" text-sky-400 font-semibold border-2 border-sky-400 px-4 py-1 rounded-full absolute right-4 top-5 hover:bg-sky-800/30">
                    Follow
                  </button>
                </div>
              ),
              3
            )}
          </div>
        </div>

        <div>
          {repeatComponent(
            () => (
              <News />
            ),
            5
          )}
        </div>
      </div>
    </div>
  );
}
