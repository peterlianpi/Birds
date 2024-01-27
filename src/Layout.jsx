import { BirdContext } from "./components/BirdContext/BirdContext";
import Birds from "./Birds";
import { useContext } from "react";

function Layout() {
  const birds = useContext(BirdContext);

  return (
    <>
      <Birds birds={birds} />
      <footer className="bg-black text-white text-center p-4">
        Copyright © 2024 Peter
      </footer>
    </>
  );
}

export default Layout;
