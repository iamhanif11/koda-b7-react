import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable"

function ProductPage(){
    const[product, setProduct] = useState([]);

    const addProduct = (newProduct) => {
        setProduct([...product, newProduct])

    }

    return(
        <div className="p-20 flex flex-col gap-8 justify-center items-center">
            <h1 class="text-2xl font-bold">Minitask 2</h1>
            <ProductForm onAddProduct ={addProduct}/>
            <hr />
            <ProductTable data={product}/>
        </div>
    )
}

export default ProductPage;