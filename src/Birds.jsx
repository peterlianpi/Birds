/* eslint-disable react/prop-types */

import BirdItem from "./components/BirdItem";

function Birds({ birds }) {
  return (
    <main className="bg-slate-300">
      <h1 className="w-full h-15 text-center p-4 sm:p-8 items-center uppercase font-semibold text-3xl sm:text-4xl">
        Birds
      </h1>
      <BirdItem birds={birds} />
    </main>
  );
}
export default Birds;
