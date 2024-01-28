import { FigureTemplate } from "./FigureTemplate";

export const HeaderCoffeeListing = () => {
  return (
    <header className="flex flex-col justify-center items-center mt-24">
      <div className="absolute min-[320px]:mb-[150px] lg:mb-[100px] xl:mb-[50px] md:ml-[100px]">
        <FigureTemplate image={"/vector.png"} width={0} height={0} />
      </div>
      <div
        className="z-10 flex flex-col justify-center items-center
      sm:w-10/12 lg:w-3/4 xl:w-1/3"
      >
        <h1 className="text-3xl font-dm-sans font-semibold text-white w-max h-max">
          Our Collection
        </h1>
        <p className="w-full text-[16px] text-gray-600 text-center font-medium">
          Introducing to our Coffee Collection, a selection of unique coffees
          from different roast types and origins, expertly roasted in small
          batches and shipped fresh weekly.
        </p>
      </div>
    </header>
  );
};
