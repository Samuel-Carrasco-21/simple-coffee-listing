interface Props {
  text: string;
  filter: boolean;
  action: () => void;
}

export const FilterButton = ({ text, filter, action }: Props) => {
  return (
    <button
      className={`px-3 py-2 m-2 mt-5 rounded-lg shadow-md text-white ${
        filter && "bg-slate-400"
      }
    hover:bg-slate-300 active:bg-slate-500 font-dm-sans text-sm font-semibold`}
      onClick={action}
    >
      {text}
    </button>
  );
};
