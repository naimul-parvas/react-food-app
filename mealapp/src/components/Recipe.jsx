import { useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { Mealid } = useParams();
  const [Info, setInfo] = useState();
  console.log(Mealid);

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`
    );
    const jsonDeta = await get.json();
    console.log(jsonDeta.meals[0]);
    setInfo(jsonDeta.meals[0]);
  };
  if (Info != "") {
    getInfo();
  }
  return (
    <>
      {!Info ? (
        " "
      ) : (
        <div >
          <img className="w-[300px] mx-auto mt-10 rounded-[40px] shadow-2xl" src={Info.strMealThumb}/>
          <div className="text-center">
            <h1 className="text-[30px] font-bold mt-4">Recipe Detail</h1>
            <button className="text-2xl font-semibold">{Info.strMeal}</button>
            <h3 className="text-[30px] font-bold">Instruction&apos;s</h3>
            <p className="p-[30px]">{Info.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;