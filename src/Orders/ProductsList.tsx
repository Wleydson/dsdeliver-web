import ProductCard from './ProductCard'
import { Product } from './types'
import { checkIsSelected } from './helpers'

type Props = {
    products: Product[]; 
    selectedProducts: Product[];
    onSelectedProduct: (product: Product) => void
}

function ProductsList( { products, onSelectedProduct, selectedProducts}: Props ){
    return(
       <div className="orders-list-container">
           <div className="orders-list-items">
                {
                    products.map( product =>(
                        <ProductCard 
                            product={product} 
                            onSelectedProduct={onSelectedProduct}
                            isSelected={checkIsSelected(selectedProducts, product)} 
                            key={product.id} 
                        />  
                    ))
                }
           </div>
       </div>
    );
}

export default ProductsList