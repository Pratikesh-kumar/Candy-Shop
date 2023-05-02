import React from 'react'

const ProductList = ({product}) => {
    console.log(product)
  return (
    <div>
     {
        product.map((value)=>{
            return(
                <>
                <div style={{width:'50%'}}>
                    <img src={value.imageUrl} width="50%"/>
                   <p>{value.title}</p>
                   <p>{value.price} </p>
                   <p>{value.quantity}</p>
                    </div>
                    <button>AddToCart</button>
                    </>
            )
        })
     }
    </div>
  )
}

export default ProductList
