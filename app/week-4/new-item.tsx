"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);

  const isNameValid = name.trim().length >= 2;
  const isFormValid = isNameValid;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isNameValid) {
      setNameTouched(true);
      alert("Item name must be at least 2 characters.");
      return;
    }

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log(item);
    alert(
      `Added item:\nName: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`
    );

    // reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="bg-white p-5 rounded-xl shadow space-y-4 max-w-md"
    >
      {/* Item Name */}
      <div>
        <label className="block font-semibold mb-1">Item Name</label>
        <input
          type="text"
          name="itemName"
          autoComplete="off"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          className={`w-full border p-2 rounded ${
            !isNameValid && nameTouched
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="e.g. Apples"
        />
        {!isNameValid && nameTouched && (
          <p className="text-red-500 text-sm mt-1">
            Name must be at least 2 characters.
          </p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <label className="block font-semibold mb-1">Quantity</label>
        <input
          type="number"
          required
          min={1}
          max={99}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block font-semibold mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded
                   hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add Item
      </button>
    </form>
  );
}
