import React, {useState, useEffect } from 'react';
import axios from "axios";


const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    
    // function handlePage(e) {
    //     setPageNumber(1);
    // }

    useEffect(()=>{
        setLoading(true);
        axios({
            method:"GET",
            url: "https://fakestoreapi.com/products?limit=8",
            params: {page: pageNumber}
           
        }).then(res=>{
            console.log(res.data);
            setData(res.data);
            console.log(res.params);
        }).catch(e=> {console.log(e) 
           
        })
        .finally(()=>setLoading(false));
       
    },[pageNumber]);

    
    return(

          <>
          <div className='productList col-centered'>
            {loading && (
            <div>
                {" "}
                <div className='loadingIndicator'>
                <h1>Loading items...</h1>
                </div>
               
                </div>
                )}

                {data.map((product)=>(
                    
                        <div key={product.id} className="cardItem">
                            <div><img src={require("../assets/item.png")} alt="#" /></div>
                                <div className='card-discription'>
                                    <h6 className='prouductTitle'> {product.title} </h6>
                                    <h6 className='prouductPrice'> {`Price: $${product.price}`} </h6>
                                    <h6 className='prouductCategory'> {`Category: ${product.category}`} </h6>
                                </div>
                        </div>
                    
                ))
                }
    </div>
    </>
        
    );
}

export default Products