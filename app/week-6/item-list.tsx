"use client";

import { useState } from "react";
import Item from "./item";

type ItemType = {
  id?: string;
  name: string;
  quantity: number;
  category: string;
};

type SortBy = "name" | "category" | "grouped";

export default function ItemList({ items }: { items: ItemType[] }) {
  const [sortBy, setSortBy] = useState<SortBy>("name");

  const buttonBase = "px-3 py-2 rounded border text-sm font-medium";
  const active = "bg-black text-white";
  const inactive = "bg-white text-black";

  const renderContent = () => {
    // GROUPED VIEW
    if (sortBy === "grouped") {
      const grouped = items.reduce<Record<string, ItemType[]>>((acc, item) => {
        (acc[item.category] ||= []).push(item);
        return acc;
      }, {});

      const categories = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

      return (
        <div className="space-y-6">
          {categories.map((cat) => {
            const catItems = [...grouped[cat]].sort((a, b) =>
              a.name.localeCompare(b.name)
            );

            return (
              <div key={cat}>
                <h2 className="text-lg font-bold capitalize mb-2">{cat}</h2>

                <ul className="space-y-2">
                  {catItems.map((item) => (
                    <Item
                      key={item.id ?? `${item.name}-${item.category}`}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );
    }

    // SORTED VIEW (name/category)
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });

    return (
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id ?? `${item.name}-${item.category}`}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    );
  };

  return (
    <section>
      <div className="flex gap-2 mb-4">
        <button
          className={`${buttonBase} ${sortBy === "name" ? active : inactive}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          className={`${buttonBase} ${
            sortBy === "category" ? active : inactive
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>

        <button
          className={`${buttonBase} ${sortBy === "grouped" ? active : inactive}`}
          onClick={() => setSortBy("grouped")}
        >
          Group by Category
        </button>
      </div>

      {renderContent()}
    </section>
  );
}