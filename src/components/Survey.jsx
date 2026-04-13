import { useDispatch } from "react-redux";
import { addSurvey } from "../redux/slices/surveySlice";
import { useState } from "react";

function Survey() {
  const dispatch = useDispatch();
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [gender, setGender] = useState("");
  const [perokok, setPerokok] = useState("");
  const [brands, setBrands] = useState([]);

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setBrands([...brands, value]);
    } else {
      setBrands(brands.filter((b) => b !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      nama,
      umur,
      gender,
      perokok,
      brands: brands.join(", "),
    };

    dispatch(addSurvey(newData));

    setNama("");
    setUmur("");
    setBrands("");
  };

  return (
    <>
      <div className=" border p-4 bg-amber-100 rounded-md gap-1 max-w-xl mx-auto">
        <h1 className="font-bold text-2xl mb-4">Survey Perokok</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <div className="flex gap-2">
            <label htmlFor="nama">Nama: </label>
            <input
              type="text"
              id="nama"
              className="border p-1 rounded focus outline-amber-500"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-2">
            <label htmlFor="umur">Umur: </label>
            <input
              type="number"
              id="umur"
              className="border p-1 rounded focus outline-amber-500"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Jenis Kelamin</label>

            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Laki-laki"
                  onChange={(e) => setGender(e.target.value)}
                />
                Laki-laki
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Perempuan"
                  onChange={(e) => setGender(e.target.value)}
                />
                Perempuan
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="perokok">Apakah anda seorang perokok</label>
            <select
              name="andaPerokok"
              id="perokok"
              className="p-2 border rounded focus:outline-amber-500"
              value={perokok}
              onChange={(e) => setPerokok(e.target.value)}
              required
            >
              <option value="" disabled>
                --Pilih salah satu--
              </option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Brand rokok yang digunakan:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["Sampoerna", "Surya", "Esse", "Bentoel", "76"].map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={brand}
        
                    onChange={handleCheckBox}
    
                    checked={brands.includes(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <div>
            <button type="submit" className="border bg-white p-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Survey;
