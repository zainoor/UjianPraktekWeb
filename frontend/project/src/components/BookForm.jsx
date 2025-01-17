import React, { useState, useEffect } from "react";

function BookForm({ onAdd, onEdit, editData, clearEdit }) {
  const [formData, setFormData] = useState({
    judul: "",
    pengarang: "",
    tahun_terbit: "",
    genre: "",
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      onEdit(formData);
    } else {
      onAdd(formData);
    }
    setFormData({ judul: "", pengarang: "", tahun_terbit: "", genre: "" });
    clearEdit();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        {editData ? "Edit Buku" : "Tambah Buku"}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="judul"
          value={formData.judul}
          onChange={handleChange}
          placeholder="Judul"
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="pengarang"
          value={formData.pengarang}
          onChange={handleChange}
          placeholder="Pengarang"
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="number"
          name="tahun_terbit"
          value={formData.tahun_terbit}
          onChange={handleChange}
          placeholder="Tahun Terbit"
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="border px-4 py-2 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
      >
        {editData ? "Simpan Perubahan" : "Tambah Buku"}
      </button>
      {editData && (
        <button
          type="button"
          onClick={clearEdit}
          className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2"
        >
          Batal
        </button>
      )}
    </form>
  );
}

export default BookForm;