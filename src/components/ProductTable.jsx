import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProductAsync,
  setEditingIndex,
} from "../redux/slices/productSlice";

function ProductTable() {
  const products = useSelector((state) => state.products?.listProduct) || [];
  const dispatch = useDispatch();

  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleDelete = (index) => {
    setDeletingIndex(index);

    dispatch(deleteProductAsync(index));

    setTimeout(() => {
      setDeletingIndex(null);
    }, 1000);
  };

  return (
    <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-sm overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 text-black">Daftar Produk</h2>

      <table className="min-w-full border-collapse border-2 border-gray-300 text-left">
        <thead>
          <tr className="bg-amber-500 text-black">
            <th className="border-2 border-gray-300 p-3 w-16 text-center">
              No
            </th>
            <th className="border-2 border-gray-300 p-3">Nama Produk</th>
            <th className="border-2 border-gray-300 p-3">Harga</th>
            <th className="border-2 border-gray-300 p-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-8 text-center text-gray-500 italic">
                Belum ada produk. Silakan tambah di atas.
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={index}>
                <td className="border-2 border-gray-300 p-3 text-center">
                  {index + 1}
                </td>
                <td className="border-2 border-gray-300 p-3 font-medium">
                  {product.nama}
                </td>
                <td className="border-2 border-gray-300 p-3">
                  Rp {product.harga}
                </td>
                <td className="border-2 border-gray-300 p-3 text-center space-x-2">
                  <button
                    onClick={() => dispatch(setEditingIndex(index))} 
                    disabled={deletingIndex === index}
                    className="px-4 py-2 rounded text-white font-medium bg-blue-600 hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    disabled={deletingIndex === index}
                    className={`px-4 py-2 rounded text-white font-medium transition ${
                      deletingIndex === index
                        ? "bg-red-300 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-700"
                    }`}
                  >
                    {deletingIndex === index ? "Menghapus..." : "Hapus"}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
