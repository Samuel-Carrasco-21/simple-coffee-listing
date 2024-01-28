interface Props {
  children: JSX.Element;
}

export const PrincipalBackground = ({ children }: Props) => {
  return (
    <section className="flex flex-col w-full h-max">
      <div className="fixed z-10 bg-principal-bg bg-cover bg-center w-full h-52" />
      <div className="fixed inset-0 bg-stone-950 " />
      <main
        className="inset-0 z-20 absolute flex justify-center items-center bg-transparent h-max
      overflow-auto"
      >
        {children}
      </main>
    </section>
  );
};
