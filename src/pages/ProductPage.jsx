
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function ProductPage(){

    
    return(
        <div className="p-20 flex flex-col gap-8 justify-center items-center">
        
            <h1 className="text-2xl font-bold">Minitask 4 (Redux Persist & Thunk)</h1>
            
    
            <ProductForm />
            
            <hr className="w-full border-2 border-gray-200" />
            
            <ProductTable />
        </div>
    )
}

export default ProductPage;