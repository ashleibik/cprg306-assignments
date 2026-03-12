"use client";

import { useEffect, useState } from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

async function fetchMealIdeas(ingredient: string): Promise<Meal[]> {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
      ingredient
    )}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data: { meals: Meal[] | null } = await res.json();
    return data.meals ?? [];
  } catch (err) {
    console.error("fetchMealIdeas error:", err);
    return [];
  }
}

export default function MealIdeas({ ingredient }: { ingredient: string }) {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    const load = async () => {
      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
    };

    load();
  }, [ingredient]);

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Meal Ideas</h2>

      {!ingredient ? (
        <p>Select an item to see meal ideas.</p>
      ) : (
        <>
          <p>
            Here are some meals you can make with <b>{ingredient}</b>:
          </p>

          {meals.length === 0 ? (
            <p>No meals found.</p>
          ) : (
            <ul>
              {meals.map((meal) => (
                <li key={meal.idMeal} style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 600 }}>{meal.strMeal}</div>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={180}
                    style={{ borderRadius: "10px", marginTop: "0.35rem" }}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}