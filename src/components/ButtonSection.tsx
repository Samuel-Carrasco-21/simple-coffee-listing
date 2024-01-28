import { FilterButton } from "./FilterButton";

interface Props {
  filter: boolean;
  setFilter: (param: boolean) => void;
}

export const ButtonSection = ({ filter, setFilter }: Props) => {
  const setTrue = () => {
    setFilter(true);
  };

  const setFalse = () => {
    setFilter(false);
  };

  const BUTTONS = [
    {
      text: "All Products",
      action: () => setFalse(),
    },
    {
      text: "Available Now",
      action: () => setTrue(),
    },
  ];

  return (
    <section className="flex flex-row mt-1 mb-7">
      {BUTTONS.map((item, index) => (
        <FilterButton
          key={index}
          text={item.text}
          action={item.action}
          filter={
            filter && item.text === "Available Now"
              ? true
              : !filter && item.text === "All Products"
          }
        />
      ))}
    </section>
  );
};
