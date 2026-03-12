type ItemProps = {
  name: string;
  quantity: number;
  category: string;
  onSelect?: () => void;
};

export default function Item({ name, quantity, category, onSelect}: ItemProps) {
  return (
    <li 
      onClick={onSelect}  
      className="border rounded p-3">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}