import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { addProductAsync, editProductAsync, setEditingIndex } from "../redux/slices/productSlice";

function ProductForm() {
    const dispatch = useDispatch();
    
    const listProduct = useSelector((state) => state.products?.listProduct) || [];
    const editingIndex = useSelector((state) => state.products?.editingIndex);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);

   
    const [prevEditingIndex, setPrevEditingIndex] = useState(null);

    
    if (editingIndex !== prevEditingIndex) {
        setPrevEditingIndex(editingIndex); 
        
        if (editingIndex !== null && editingIndex !== undefined) {
            const productToEdit = listProduct[editingIndex];
            if (productToEdit) {
                setName(productToEdit.nama);
                setPrice(productToEdit.harga);
            }
        } else {
    
            setName("");
            setPrice("");
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !price) return;

        setIsLoading(true);
        const productData = { nama: name, harga: price };

        if (editingIndex !== null && editingIndex !== undefined) {
            dispatch(editProductAsync(editingIndex, productData));
            dispatch(setEditingIndex(null)); 
        } else {
            dispatch(addProductAsync(productData));
        }

        setName("");
        setPrice("");

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        <form onSubmit={handleSubmit} className="px-16 flex flex-col gap-8 w-full max-w-lg" >
            <input 
             className="border-2 border-black rounded-sm p-2"
             type="text"
             placeholder="Nama Produk"
             value={name}
             onChange={(e)=> {setName(e.target.value)}}
            />
            
            <input 
             className="border-2 border-black rounded-sm p-2"
             type="number"
             placeholder="Masukkan Harga"
             value={price} 
             onChange={(e)=> {setPrice(e.target.value)}}
            />

            <div className="flex gap-4">
                <button 
                 type="submit" 
                 disabled={isLoading}
                 className={`flex-1 border-2 border-solid border-black rounded-full p-4 font-medium text-base transition ${
                     isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600'
                 }`}
                >
                 {isLoading ? 'Menyimpan...' : (editingIndex !== null ? 'Update Produk' : 'Tambah Produk')}
                </button>

                {editingIndex !== null && (
                    <button 
                     type="button"
                     onClick={() => dispatch(setEditingIndex(null))}
                     className="border-2 border-solid border-black rounded-full p-4 font-medium text-base bg-white hover:bg-gray-100 transition"
                    >
                        Batal
                    </button>
                )}
            </div>
        </form>
    )
}

export default ProductForm;