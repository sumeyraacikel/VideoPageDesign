import {
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="py-4 md:px-8 flex items-center w-full h-[80px] sm:px-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
        alt=""
        className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] ml-0 lg:ml-[30px] "
        id="logo"
      />
        <div className=" h-[30px] items-center overflow-hidden px-2 ml-8" >
            <a href=" " className="text-gray-100 ">Anasayfa</a>
        </div>
        <div className=" h-[30px] items-center overflow-hidden px-2 ml-8" >
            <a href="" className="text-gray-100">Hakkımızda</a>
        </div>
        <div className=" h-[30px] items-center overflow-hidden px-2 ml-8" >
            <a href="" className="text-gray-100">Kategoriler</a>
        </div>
        <div className=" h-[30px] items-center overflow-hidden px-2 ml-8"  >
            <a href="" className="text-gray-100">Takip Ettiklerim</a>
        </div>
        <div className=" h-[30px] items-center overflow-hidden px-2 ml-8" >
            <a href="" className="text-gray-100">SSS</a>
        </div>
        <div className=" h-[30px] items-center overflow-hidden px-2 ml-8" >
            <a href="" className="text-gray-100">İletişim</a>
        </div>
      {/* search Box */}
      <div
        className="bg-searchBar h-[40px] flex items-center overflow-hidden px-2 ml-80
      sm:hidden md:flex"
        id="searchBox"
      >
        <Search className="text-gray-400" />
        <input
          type="text"
          className="w-60 h-full bg-transparent rounded-lg text-textColor outline-none border-none placeholder-gray-400 px-2"
          placeholder="Search"
        />
      </div>

      <div
        className="ml-auto flex items-center justify-evenly h-[40px]
        sm:w-[75%] md:w-[50%] lg:w-[25%] "
        id="profileContainer"
      >
        <IconButton className="lg:mx-4">
          <Settings className="text-gray-400 hover:text-textColor  " />
        </IconButton>
        <IconButton className="lg:mx-4">
          <Notifications className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <div className="flex items-center">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="rounded-full w-[40px] h-[40px] object-cover"
          />
          <p className="text-textColor text-[16px] font-bold ml-2">
            Sümeyra Açıkel{" "}
            <span className="block text-[12px] text-gray-500">
              Software Engineer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
