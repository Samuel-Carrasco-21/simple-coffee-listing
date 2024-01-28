import { useEffect, useState } from "react";
import { CoffeeModel } from "../models/coffeeModel";
import { getCoffeeListService } from "../services/coffeeService";
import { CoffeeCard } from "./CoffeeCard";
import { ModalPage } from "../modals/ModalPage";
import { ModalLoading } from "../modals/ModalLoading";
import ModalMessage from "../modals/ModalMessage";

interface Props {
  filter: boolean;
}

export const CoffeeList = ({ filter }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [coffeeList, setCoffeeList] = useState<CoffeeModel[]>([]);

  const getCoffeeList = async () => {
    try {
      setLoading(true);
      const { data } = await getCoffeeListService();
      setCoffeeList(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCoffeeList();
  }, []);

  return (
    <>
      {(loading || error) && (
        <ModalPage>
          {loading && <ModalLoading />}
          {error && (
            <ModalMessage
              action={() => {
                setError(false);
                getCoffeeList();
              }}
              title={"Error 404!"}
              message={"Coffee list not found"}
            />
          )}
        </ModalPage>
      )}
      <section className="flex flex-row justify-center flex-wrap w-full h-max m-1 p-1">
        {coffeeList
          .filter((item) => (filter ? item.available : true))
          .map((item, index) => (
            <CoffeeCard key={index} coffeeItem={item} />
          ))}
      </section>
    </>
  );
};
