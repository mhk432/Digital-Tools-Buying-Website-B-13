import React from 'react';
import Card from '../ui-card/Card';

const AvailableCard = ({products ,count, setCount}) => {
    
    return (
        <div className='px-20'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                products.map( (products)=>  {
                 
                    
                 
                return <Card key={products.id}
                   products={products} setCount={setCount} count={count}></Card>
                  })
               }
            </div>
        </div>
    );
};

export default AvailableCard;