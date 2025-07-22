
export function Card({ title, image, description }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
