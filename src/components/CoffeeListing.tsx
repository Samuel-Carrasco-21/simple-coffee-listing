interface Props {
  children: JSX.Element;
}

export const CoffeeListing = ({ children }: Props) => {
  return (
    <section
      className="sm:w-1/2 lg:w-4/6 xl:w-5/6 h-max bg-stone-900 flex flex-col justify-center items-center
      sm:px-5 sm: lg:px-10 xl:px-14 sm:py-3 lg:py-5 xl:py-7 rounded-xl shadow-md m-20"
    >
      {children}
    </section>
  );
};
