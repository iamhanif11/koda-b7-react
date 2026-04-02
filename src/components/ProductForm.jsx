import { useState } from "react";

function ProductForm({onAddProduct}){
    const [name, setName]= useState("");
    const [price, setPrice] =useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !price) return;

        const newProduct ={nama : name, harga : price}

        onAddProduct(newProduct);

        setName("");
        setPrice("")
    }
    return (
        <form onSubmit={handleSubmit} className="px-16 flex flex-col gap-8" >
            <input className="border-2 border-black rounded-sm p-2"
             type="text"
             placeholder="Nama Produk"
             value={name}
             onChange={(e)=> {setName(e.target.value)}}

            />
             <input className="border-2 border-black rounded-sm p-2"
             type="number"
             placeholder="Masukkan Harga"
             value={price} 
             onChange={(e)=> {setPrice(e.target.value)}}/>

             <button type="submit" className="border-2 border-solid border-black rounded-full bg-amber-500 p-4 font-medium text-base">Tambah</button>
        </form>
    )
}

export default ProductForm
