"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

type ItemType = {
  id?: string;
  name: string;
  quantity: number;
  category: string;
};

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState<ItemType[]>([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/week-8");
      return;
    }

    loadItems();
  }, [user, router]);

  async function loadItems() {
    if (!user) return;

    const userItems = await getItems(user.uid);
    setItems(userItems as ItemType[]);
  }

  async function handleAddItem(item: {
    name: string;
    quantity: number;
    category: string;
  }) {
    if (!user) return;

    const id = await addItem(user.uid, item);
    setItems((prev) => [...prev, { id, ...item }]);
  }

  function handleItemSelect(item: ItemType) {
    const cleaned = item.name
      .toLowerCase()
      .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
      .replace(/[^a-z\s]/g, " ")
      .trim();

    const ingredient = cleaned.split(/\s+/).filter(Boolean)[0] ?? "";
    setSelectedItemName(ingredient);
  }

  if (!user) {
    return <p className="p-6">Redirecting...</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="md:w-1/2 space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}