import React from 'react';
import Card from '../ui-card/Card';

const AvailableCard = ({products}) => {
    // console.log(products, "available card")
    return (
        <div className='px-20'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                products.map( (products)=>  {
                 
                    
                 
                return <Card key={products.id}  products={products}></Card>
                  })
               }
            </div>
        </div>
    );
};

export default AvailableCard;