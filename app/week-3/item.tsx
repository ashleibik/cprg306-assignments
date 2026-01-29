interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="bg-slate-800 p-4 m-2 rounded text-white">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm text-slate-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
