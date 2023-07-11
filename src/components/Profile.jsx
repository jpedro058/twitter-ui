import { IoMdArrowBack } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { MdCake } from "react-icons/md";
import { repeatComponent } from "repeat-component";
import { CiRepeat } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

export function Profile() {
  return (
    <div className="flex flex-col h-full border-x  border-zinc-700 relative">
      <header className="flex items-center h-16 gap-5 absolute z-10 bg-black w-full ">
        <div className="ms-6">
          <IoMdArrowBack className="text-3xl text-sky-400" />
        </div>
        <div className="flex flex-col ">
          <span className="text-2xl text-white font-bold">Laranjas</span>
          <p className=" text-zinc-400 font-semibold">69,420 Tweets</p>
        </div>
      </header>

      <div className="flex flex-col w-full h-screen border-x  border-zinc-700 relative no-scrollbar overflow-y-auto  scroll-smooth">
        <div className="flex flex-col mt-16">
          <div className="bg-sky-600 h-40 relative">
            <div className="bg-zinc-500 h-40 w-40 rounded-full absolute -bottom-16 left-5 border-4 border-black"></div>
          </div>
        </div>
        <div className="flex  pt-4 justify-end pe-4 py-2 w-full">
          <button className="border-2 border-sky-400 w-fit rounded-full p-2 px-4 hover:bg-sky-400/20">
            <span className="text-sky-400 font-semibold text-lg">
              Edit Profile
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col px-4">
            <span className="text-white font-bold text-2xl">Laranjas</span>
            <span className="text-zinc-400 font-semibold">@johndoeMan</span>
          </div>

          <span className="text-white font-semibold px-4">
            Nice twitter eh
            <span className="text-sky-600 font-semibold cursor-pointer">
              {" "}
              @this_is_a_mention
            </span>
          </span>

          <div className="flex flex-col gap-1 px-4">
            <span className="text-white text-lg flex items-center gap-2">
              <TfiLocationPin className="inline-block text-lg text-zinc-400" />
              <span className="text-zinc-400 font-semibold text-base">
                Portugal
              </span>
            </span>
            <span className="text-white text-lg flex items-center gap-2">
              <MdCake className="inline-block text-lg text-zinc-400" />
              <span className="text-zinc-400 text-base font-semibold">
                Born 5 Dec
              </span>
            </span>

            <div className="flex items-center pt-2 gap-4">
              <p className="text-zinc-400 font-semibold cursor-pointer">
                following <span className="text-white font-bold">420</span>
              </p>

              <p className="text-zinc-400 font-semibold cursor-pointer">
                followers <span className="text-white font-bold">69</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full border-b-2 border-sky-600 h-14 hover:bg-sky-600/10 cursor-pointer">
            <button className="text-sky-600 font-bold text-xl">Tweets</button>
          </div>
        </div>

        <div className="flex flex-col ">
          {repeatComponent(
            () => (
              <div className="flex px-4 pt-10 border-b border-zinc-400">
                <div className="bg-zinc-500 h-16 w-16 rounded-full border-4 border-black relative">
                  <div className="absolute -right-40 -top-7 w-[8rem]">
                    <div className="flex w-full gap-2">
                      <CiRepeat className="text-sm text-zinc-400" />
                      <p className=" text-zinc-400  text-sm">You reteweeted</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col ps-4 w-full">
                  <div className="flex flex-col">
                    <p className="text-white font-bold text-lg ps-2">
                      Donald J. Trump{" "}
                      <span className="text-zinc-500 text-sm ps-1">
                        @realDonaldTrump - Feb 31{" "}
                      </span>
                    </p>
                    <p className="text-white ps-2">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className=" bg-zinc-500/40 w-[100%] h-80 rounded-2xl mt-2 "></div>

                  <div className="flex justify-center gap-16 py-4">
                    <div className="flex items-center gap-2 hover:opacity-60 cursor-pointer">
                      <BiCommentDetail className="text-xl text-zinc-400 " />
                      <p className="text-zinc-400 text-lg font-semibold">69</p>
                    </div>
                    <div className="flex items-center gap-2 hover:opacity-60 cursor-pointer">
                      <CiRepeat className="text-2xl text-green-600" />
                      <p className="text-green-600 text-lg font-semibold">
                        69,430
                      </p>
                    </div>
                    <div className="flex items-center gap-2 hover:opacity-60 cursor-pointer">
                      <AiFillHeart className="text-2xl text-red-600 " />
                      <p className="text-red-600 text-lg font-semibold ">
                        69.321,744
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
            5
          )}
        </div>
      </div>
    </div>
  );
}
