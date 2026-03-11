import React from "react";

interface ProductInterface{
    [phone:string]: number
}

const products:ProductInterface = {
    'iPhone 14':1000,
    'iPhone 15':2000,
    'Samsung S23 Ultra': 1500,
};

function Products(props)
{
    console.log(props.tax)
    return(
        <> 
           { Object.entries(products).map( ([phone,price]) => (
            <p>{ phone }, price: ${ price } with tax: ${ CalculateTax(price, props.tax) }</p>
           ))
           
           } 
        </>
    );
}

function CalculateTax(price:number, tax:number):number
{
    return ((price*tax)/100)+price
}

export default Products;