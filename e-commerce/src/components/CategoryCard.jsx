function CategoryCard({ image, title, count }) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-[300px] w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
        <h3 className="text-base font-bold">
          {title}
        </h3>

        <p className="text-sm font-semibold">
          {count} Items
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;