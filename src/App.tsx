import { useEffect, useState } from "react";
import { ButtonSection } from "./components/ButtonSection";
import { CoffeeListing } from "./components/CoffeeListing";
import { HeaderCoffeeListing } from "./components/HeaderCoffeeListing";
import { PrincipalBackground } from "./components/PrincipalBackground";
import { CoffeeList } from "./components/CoffeeList";

function App() {
  const [filter, setFilter] = useState<boolean>(false);

  return (
    <PrincipalBackground>
      <CoffeeListing>
        <>
          <HeaderCoffeeListing />
          <ButtonSection setFilter={setFilter} filter={filter} />
          <CoffeeList filter={filter} />
        </>
      </CoffeeListing>
    </PrincipalBackground>
  );
}

export default App;
