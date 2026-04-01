function ProductTable({data}) {
    return (
        <table className="w-[60%] border-2 p-2 m-2">
        <thead className="bg-amber-500 ">
                <tr>
                    <th className="border-2 border-black">Nama Produk</th>
                    <th className="border-2 border-black">Harga</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr  key={item}>
                        <td className="border-2 border-black">{item.nama}</td>
                        <td className="border-2 border-black">{item.harga}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductTable;