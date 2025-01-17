const API_URL = "http://localhost:8000";

export async function fetchBooks() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function addBook(book) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return response.json();
}

export async function editBook(book) {
  const response = await fetch(`${API_URL}/${book.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return response.json();
}
export async function deleteBook(id) {
    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to delete book");
    }
  }
  
