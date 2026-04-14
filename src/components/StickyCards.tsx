import { productsCard } from '@/utils/constants';
import ProductSection from './ProductSection';

export default function StickyCardsStack() {
  return (
    <div className="relative w-full">
      {productsCard.map((product, index) => (
        <ProductSection
          key={index}
          title={product.title}
          image={product.image}
          desc={product.desc}
          className="sticky top-20"
          style={{ zIndex: index + 1 }}
        />
      ))}
    </div>
  );
}
