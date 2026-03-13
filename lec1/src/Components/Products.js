import React from 'react';
import { useState } from 'react';

function Products(props)
{
    let [products, setProducts] = useState(
        {
            'iPhone 14':1000,
            'iPhone 15':2000,
            'Samsung S23 Ultra': 1500,
        }
    );

    let [newProductName, setProductName] = useState();
    let [newProductPrice, setProductPrice] = useState();
    
    function addProduct()
    {
        console.log(newProductPrice, newProductName);
    }

    return(
        <>
           <button onClick={ () => setProducts( {}) }>Obrisi proizvode</button>

           {Object.entries(products).map(([phone,price]) => (
                <p>{phone}, price: ${price} with tax: ${CalculateTax(price, Number(props.tax))}</p>
            ))}


            <div>
                <input onInput={ (e) => setProductName(e.target.value) } type="text" placeholder='Unesite ime proizvoda'/>
                <input onInput={ (e) => setProductPrice(e.target.value) } type="number" placeholder='Unesite cijenu proizvoda'/>
                <button onClick={addProduct}> Add new product </button>
            </div>


        </>
    );
}

function CalculateTax(price, tax)
{
    return ((price * tax) / 100) + price
}

export default Products;