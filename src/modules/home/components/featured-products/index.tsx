import { ProductCollection } from "@medusajs/medusa"
import ProductRail from "./product-rail"

const FeaturedProducts = ({
  collections,
}: {
  collections: ProductCollection[]
}) => {
  return (
    <div className="py-12">
      <div className="py-12 pt-0">
        <h1 className= "text-3xl font-bold text-center text-[#525151] pb-7">Our Products</h1>
        <ul className="flex flex-col gap-x-6 gap-y-8">
          {collections.map((collection) => (
            <li key={collection.id}>
              <ProductRail collection={collection} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
