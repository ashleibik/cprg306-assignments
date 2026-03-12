"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

type ItemType = {
  id?: string;
  name: string;
  quantity: number;
  category: string;
};

export default function Page() {
  const [items, setItems] = useState<ItemType[]>(itemsData as ItemType[]);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item: { name: string; quantity: number; category: string }) {
    setItems((prev) => [...prev, { id: Date.now().toString(), ...item }]);
  }

  function handleItemSelect(item: ItemType) {
    const cleaned = item.name
      .toLowerCase()
      .replace(/[\u{1F300}-\u{1FAFF}]/gu, "") // remove emojis
      .replace(/[^a-z\s]/g, " ") // keep letters/spaces
      .trim();

    const ingredient = cleaned.split(/\s+/).filter(Boolean)[0] ?? "";
    setSelectedItemName(ingredient);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {/* Left: Add + List */}
        <div className="md:w-1/2 space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right: Meal Ideas */}
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}