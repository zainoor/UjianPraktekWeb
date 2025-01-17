import React from "react";

function List({ books, onDelete, onEdit }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Buku</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-500 text-white">
            <th className="border px-4 py-2">Judul</th>
            <th className="border px-4 py-2">Pengarang</th>
            <th className="border px-4 py-2">Tahun Terbit</th>
            <th className="border px-4 py-2">Genre</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border px-4 py-2">{book.judul}</td>
              <td className="border px-4 py-2">{book.pengarang}</td>
              <td className="border px-4 py-2">{book.tahun_terbit}</td>
              <td className="border px-4 py-2">{book.genre}</td>
              <td className="border px-4 py-2 flex space-x-2">
                <button
                  onClick={() => onEdit(book)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(book.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
