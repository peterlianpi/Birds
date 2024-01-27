/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BirdContext } from "./BirdContext/BirdContext";
import { useParams, useNavigate } from "react-router-dom";

function BirdDetail() {
  const birds = useContext(BirdContext);
  const myBird = birds.birds;
  const { id } = useParams();
  const navigate = useNavigate();

  const myBirdDetail = myBird.find((bird) => String(bird.Id) === id);

  const backButton = () => {
    navigate("..");
  };

  return (
    <div
      className="bg-white flex flex-col p-8
      sm:grid sm:grid-cols-2 w-80
    sm:w-[800px] mx-auto my-4 sm:my-10 text-center rounded-lg"
    >
      {" "}
      <div className="w-full">
        <img
          className="w-60 h-60 mx-auto rounded-full py-8"
          src={myBirdDetail.ImagePath}
          alt={myBirdDetail.BirdEnglishName}
        />
      </div>
      <div className="">
        <h1 className="font-semibold pb-8">
          {myBirdDetail.BirdEnglishName}
          <br />
          {myBirdDetail.BirdMyanmarName}
        </h1>
        <p className="py-2 text-left">{myBirdDetail.Description}</p>
        <button
          className="bg-blue-600 w-20 mx-auto py-2 mt-4 rounded-xl text-center text-white"
          onClick={() => backButton()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
export default BirdDetail;
