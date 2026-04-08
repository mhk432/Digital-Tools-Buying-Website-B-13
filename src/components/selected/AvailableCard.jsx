import React from 'react';
import Card from '../ui-card/Card';

const AvailableCard = ({products ,count, setCount, selectedProducts, setSelectedProducts}) => {
    
    return (
        <div className='px-20'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                products.map( (products)=>  {
                 
                    
                 
                return <Card key={products.id}
                   products={products} setCount={setCount} count={count} 
                   selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></Card>
                  })
               }
            </div>
        </div>
    );
};

export default AvailableCard;