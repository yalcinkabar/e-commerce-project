function ProductCard ({
    image,
    title,
    category,
    oldPrice,
    newPrice,
})  {
  return(
    <div className="text-center">
      {/* Product Image */}
      <img 
      src={image}
      alt={title}
      className="mb-6 w-full object-cover"
    />
      
      {/* Product Title */}
      <h5 className="mb-2 text-base font-bold text-[#252B42]">
        {title}
      </h5>

      {/* Product category */}
      <p className="mb-3 text-sm font-bold text-[#737373]">
        {category}
      </p>

      {/* Prices */}
      <div className="mb-3 flex justify-center gap-2 text-base font-bold">
        <span className="text-[#BDBDBD]">${oldPrice}</span>
        <span className="text-[#23856D]">${newPrice}</span>
      </div>

      {/* Color circles (Figma'daki Ellipse'ler) */}
      <div className="flex justify-center gap-2">
        <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>
        <span className="h-4 w-4 rounded-full bg-[#23856D]"></span>
        <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>
        <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
      </div>
    </div>  
  )
}

export default ProductCard;