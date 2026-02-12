type ItemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="border rounded p-3">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
