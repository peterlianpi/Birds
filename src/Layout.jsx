import { BirdContext } from "./components/BirdContext/BirdContext";
import Birds from "./Birds";
import { useContext } from "react";

function Layout() {
  const birds = useContext(BirdContext);

  return (
    <>
      <Birds birds={birds} />
    </>
  );
}

export default Layout;
