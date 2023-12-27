import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CustomArrowProps } from "react-slick";
export const NextArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 transform bg-white rounded-full shadow cursor-pointer top-1/2"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-4xl text-blue-500" />
  </div>
);

export const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 transform bg-white rounded-full shadow cursor-pointer top-1/2"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-4xl text-blue-500" />
  </div>
);
