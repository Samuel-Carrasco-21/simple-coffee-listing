import { memo } from "react";
import { CoffeeModel } from "../models/coffeeModel";
import { FigureTemplate } from "./FigureTemplate";

interface Props {
  coffeeItem: CoffeeModel;
}

export const CoffeeCard = memo(({ coffeeItem }: Props) => {
  return (
    <div className="flex flex-col mx-3 mb-9 w-max">
      <div className="flex flex-col">
        {coffeeItem.popular && (
          <p
            className="absolute z-10 flex self-start m-3 py-1 px-3 bg-amber-300 text-yellow-800
          rounded-full text-center font-dm-sans text-xs font-semibold"
          >
            Popular
          </p>
        )}
        <FigureTemplate
          image={coffeeItem.image}
          width={300}
          height={0}
          rounded={true}
          shadow={true}
        />
      </div>
      <div className="flex flex-col my-2 bg-transparent">
        <div className="flex flex-row justify-between items-center">
          <span className="text-base font-dm-sans font-semibold ml-0 my-2 mr-2 text-center text-white">
            {coffeeItem.name}
          </span>
          <span
            className="text-xs font-dm-sans font-semibold px-2 py-1 rounded-[4px] shadow-md
          bg-emerald-100 text-black"
          >
            {coffeeItem.price}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center">
            <FigureTemplate
              image={
                coffeeItem.rating
                  ? "/src/assets/Star_fill.svg"
                  : "/src/assets/Star.svg"
              }
              width={24}
              height={24}
            />
            {coffeeItem.rating ? (
              <div className="flex flex-row justify-start items-center">
                <span className="text-base text-white font-dm-sans font-medium m-1">
                  {coffeeItem.rating}
                </span>
                <span className="text-sm text-gray-600 font-dm-sans m-1 font-bold">
                  ({coffeeItem.votes} votes)
                </span>
              </div>
            ) : (
              <span className="text-sm text-gray-600 font-dm-sans m-1 font-bold">
                No ratings
              </span>
            )}
          </div>

          {!coffeeItem.available && (
            <span className="text-sm text-red-400 font-dm-sans ml-1 my-1 font-bold">
              Sold out
            </span>
          )}
        </div>
      </div>
    </div>
  );
});
