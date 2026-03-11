import React from "react"

interface ProductInterface{
    [phone:string]: number
}

const products = 
{
  'iPhone 14': 1000,
  'iPhone 15': 2000,
  'Samsung S23 Ultra': 1500,
};

function Products(props)
{
    console.log(props.discount);
    return(
        <>
            {
                Object.entries(products).filter( ([phone,price]) => price>=props.minPrice)
                .map( ([phone,price]) => (
                    <p> {phone}, {price} </p>
                ))
            }
        </>
    )
}

function popust(cijena:number, popust:number):number
{
    return cijena - (cijena * popust) / 100;
}

export default Products;