import {
  Music,
  Search,
  Home,
  Disc,
  BoomBox,
  Film,
  User,
  LogOut,
  PlayCircle,
  ListMusic,
  Heart,
  MoreVertical,
  Play,
  ChevronLast,
  ChevronFirst,
  Shuffle,
  Repeat,
  Volume2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { songs } from "@/components/constants";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const bg = "/assets/Lead-image.png";
  const now = "/assets/Rectangle_15.png";
  return (
    <main className="flex flex-col min-h-screen h-max relative">
      <div
        className="absolute bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <header className="z-10">
        <nav className="w-full">
          <div className="p-8 flex items-center">
            <Music className="h-8 w-8" />
            <div className="mx-12 flex items-center">
              <span className="mx-4">
                <Search className="h-4 w-4" />
              </span>
              <Input
                className="border-0 rounded-full bg-transparent"
                type="email"
                placeholder="Search"
              />
            </div>
          </div>
        </nav>
      </header>
      <section className="w-full flex z-10">
        <div className="ml-2 p-4 h-max">
          <div
            className={`flex flex-col rounded-full
            bg-[#1A1E1F]/[0.4] py-2`}
          >
            <span className="p-2 mb-1">
              <Button
                className="rounded-full text-[#FACD66]"
                variant={"ghost"}
                size={"icon"}
              >
                <Home />
              </Button>
            </span>
            <span className="p-2 mb-1">
              <Button className=" rounded-full" variant={"ghost"} size={"icon"}>
                <Disc />
              </Button>
            </span>
            <span className="p-2 mb-1">
              <Button className=" rounded-full" variant={"ghost"} size={"icon"}>
                <BoomBox />
              </Button>
            </span>
            <span className="p-2 mb-1">
              <Button className=" rounded-full" variant={"ghost"} size={"icon"}>
                <Film />
              </Button>
            </span>
          </div>
          <div
            className={`mt-8 flex flex-col rounded-full
          bg-[#1A1E1F]/[0.4] py-2`}
          >
            <span className="p-4 mb-1">
              <User />
            </span>
            <span className="p-4 mb-1">
              <LogOut />
            </span>
          </div>
        </div>
        <div className="flex-col ml-8 w-full mr-16">
          <div id="details" className="mt-4 flex">
            <img src={bg} alt="" />
            <div className="ml-8 flex-col justify-center">
              <h1 className="mt-24 text-4xl font-semibold text-sky-200">
                Tomorrow's tunes
              </h1>
              <h2 className="mt-4 text-sm font-light tracking-widest text-white max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aut maxime non culpa eius?
              </h2>
              <p className="mt-4 text-sm font-light tracking-widest text-white">
                64 songs ~ 16 hours+
              </p>

              <div className="mt-8">
                <Button className="rounded-full bg-[#33373B5E]/[0.2] hover:bg-[#33373B5E]">
                  <PlayCircle className="mr-2 h-4 w-4 text-[#FACD66]" />
                  <p className="text-sm font-light tracking-widest text-white">
                    Play all
                  </p>
                </Button>
                <Button className="ml-4 rounded-full bg-[#33373B5E]/[0.2] hover:bg-[#33373B5E]">
                  <ListMusic className="mr-2 h-4 w-4 text-[#FACD66]" />
                  <p className="text-sm font-light tracking-widest text-white">
                    Add to Collection
                  </p>
                </Button>
                <Button
                  className="ml-4 rounded-full bg-[#33373B5E]/[0.2] hover:bg-[#33373B5E]"
                  variant="ghost"
                  size="icon"
                >
                  <Heart className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 min-w-full">
            {songs.map((song: any, index: number) => (
              <div key={index}>
                <div className=" mb-3 flex px-2.5 py-2.5 rounded-2xl bg-[#33373B5E]/[0.2] hover:bg-[#33373B5E] items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover h-10 w-10"
                      src={song.image}
                      alt=""
                    />
                    <span className="ml-4">
                      <Heart className="h-5 w-5 hover:text-red-500 cursor-pointer" />
                    </span>
                  </div>
                  <div className="w-[200px] flex">
                    <p className="text-sm font-light tracking-widest text-white max-w-2xl">
                      {song.name}
                    </p>
                  </div>
                  <div className="w-[100px] flex">
                    <p className="text-sm font-light tracking-widest text-white max-w-2xl">
                      {song.type}
                    </p>
                  </div>
                  <p className="text-sm font-light tracking-widest text-white max-w-2xl">
                    {song.duration}
                  </p>
                  <span className="px-2.5 py-2.5 mr-4">
                    <MoreVertical className="text-[#FACD66] h-4 w-4 hover:text-red-500 cursor-pointer" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="z-50  fixed h-24 w-full bottom-0 bg-[#33373B5E]/[0.1]  border-t backdrop-filter backdrop-blur-lg flex items-center">
        <div className="max-w-7xl mx-auto flex items-center w-full">
          <div className="w-[20%] flex items-center pt-4">
            <img className="object-cover h-16 w-16" src={now} alt="" />
            <span className="ml-4 pb-4">
              <h2 className="text-md font-bold text-white max-w-2xl">
                Seasons in
              </h2>
              <p className="text-xs font-light text-white max-w-2xl">James</p>
            </span>
          </div>
          <div className="w-[60%] flex flex-col">
            <div id="icons" className="flex justify-center">
              <Button
                className="rounded-full mx-8"
                variant={"ghost"}
                size={"icon"}
              >
                <Shuffle />
              </Button>
              <Button
                className="rounded-full mx-8"
                variant={"ghost"}
                size={"icon"}
              >
                <ChevronFirst />
              </Button>
              <Button
                className="rounded-full bg-[#FACD66] mx-8"
                variant={"ghost"}
                size={"icon"}
              >
                <Play />
              </Button>
              <Button
                className="rounded-full mx-8"
                variant={"ghost"}
                size={"icon"}
              >
                <ChevronLast />
              </Button>
              <Button
                className="rounded-full mx-8"
                variant={"ghost"}
                size={"icon"}
              >
                <Repeat />
              </Button>
            </div>
            <div className="mt-4 mx-8">
              <div className="w-full flex">
                <div className="h-[3px] w-[30%] bg-[#FACD66] rounded-l-md"></div>

                <div className="h-[3px] w-[60%] bg-[#33373B5E] rounded-r-md"></div>
              </div>
            </div>
          </div>
          <div className="w-[20%] flex items-center">
            <Button
              className="rounded-full mx-2 "
              variant={"ghost"}
              size={"icon"}
            >
              <Volume2 className="h-4 w-4 " />
            </Button>
            <div className="w-full flex">
              <div className="h-[2px] w-[60%] bg-[#FACD66] rounded-l-md"></div>

              <div className="h-[3px] w-[40%] bg-[#33373B5E] rounded-r-md"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
