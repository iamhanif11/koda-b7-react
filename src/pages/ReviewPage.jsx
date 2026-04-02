import { useState} from "react";

const storage = "review";

const ReviewPage = () =>{
    const [reviews, setReviews] = useState(() => {
    try {
        const stored = localStorage.getItem(storage)
        const parsed = JSON.parse(stored)
        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []
    }
})
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    // useEffect(() => {
    //     try {
    //         const stored = localStorage.getItem(storage);
    //         if (stored) {
    //             const parsed = JSON.parse(stored)
    //             setReviews(Array.isArray(parsed) ? parsed : [])
    //         }
    //     } catch (error) {
    //         console.log("Gagal parse data localStorage:", error);
    //         setReviews([]);
    //     }
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name.trim() || !message.trim()) return;

        const newReview ={
            name,
            message,
        };

        const updateReviews = [newReview, ...reviews]
        setReviews(updateReviews)
        localStorage.setItem(storage, JSON.stringify(updateReviews))

        setName('')
        setMessage('')
    };

    return (
    <div className="max-w-2xl mx-auto">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">Review</h1>

      <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 mb-8">

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamu..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Review</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis review kamu..."
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Kirim Review
        </button>

      </form>

      <div className="grid grid-cols-2 gap-4">
        {reviews.length === 0 && (
          <p className="text-sm text-gray-400 col-span-2">Belum ada review.</p>
        )}
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-4">
            <p className="text-sm font-bold text-gray-800">{review.name}</p>
            <p className="text-sm text-gray-600 mt-1">{review.message}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ReviewPage;
