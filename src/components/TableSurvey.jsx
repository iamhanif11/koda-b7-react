import { useSelector, useDispatch } from 'react-redux';
import { removeSurvey } from "../redux/slices/surveySlice";

function TableSurvey() {

  const listSurvey = useSelector((state) => state.survey.listSurvey);
  console.log(listSurvey)
  const dispatch = useDispatch();

  return (
    <div className="mt-10 p-4">
      <table className="min-w-full border-collapse border-2 border-gray-300 shadow-lg">
        <caption className="mb-4 text-xl font-bold ">
          Data Survey Perokok
        </caption>
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 p-3">Nama</th>
            <th className="border border-gray-300 p-3">Umur</th>
            <th className="border border-gray-300 p-3">Jenis Kelamin</th>
            <th className="border border-gray-300 p-3">Apakah anda perokok?</th>
            <th className="border border-gray-300 p-3">Brand Rokok</th>
            <th className="border border-gray-300 p-3">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center bg-white">
          {listSurvey.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-4 text-gray-500 italic">
                Belum ada data survey. Silakan isi form di atas.
              </td>
            </tr>
          ) : (
            listSurvey.map((data) => (
              <tr key={data.id} className="hover:bg-amber-50">
                <td className="border border-gray-300 p-2">{data.nama}</td>
                <td className="border border-gray-300 p-2">{data.umur}</td>
                <td className="border border-gray-300 p-2">{data.gender}</td>
                <td className="border border-gray-300 p-2">
                  <span>
                    {data.perokok}
                  </span>
                </td>
                <td className="border border-gray-300 p-2">
                  {data.perokok === 'Ya' ? data.brands : '-'}
                </td>
                <td className="border border-gray-300 p-2">
                  <button 
                    onClick={() => dispatch(removeSurvey(data.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Hapus
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

export default TableSurvey;