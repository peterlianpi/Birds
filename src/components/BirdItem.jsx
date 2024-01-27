import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function BirdItem({ birds }) {
  const myBirds = birds.birds;
  return (
    <div className="flex flex-col w-80 mx-auto sm:flex sm:flex-wrap sm:flex-row justify-center items-center sm:w-full">
      {myBirds.map((bird, i) => (
        <div
          key={i}
          className="bg-slate-200 border border-gray-400 px-8 py-4 rounded-full m-4 shadow-orange-700 hover:bg-slate-50"
        >
          <Link to={`${bird.Id}`}>
            <div className="text-center font-semibold text-md py-2">
              <p>{bird.BirdEnglishName}</p>
              <p>{bird.BirdMyanmarName}</p>
            </div>
            <img
              className="w-60 h-40 object-cover rounded-full "
              src={bird.ImagePath}
              alt={bird.BirdEnglishName}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default BirdItem;
