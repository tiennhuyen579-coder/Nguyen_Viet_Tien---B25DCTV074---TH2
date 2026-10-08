
const API_URL = "";
const LOCAL_URL = "./books.json";

export async function fetchBooks() {
  const res = await fetch(API_URL || LOCAL_URL);
  if (!res.ok) {
    throw new Error(`Máy chủ trả về lỗi ${res.status}`);
  }
  return res.json();
}

export async function createBook(book) {
  if (!API_URL) {
    
    return { ...book, id: String(Date.now()) };
  }
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) {
    throw new Error(`Không thêm được sách (lỗi ${res.status})`);
  }
  return res.json();
}

export async function deleteBook(id) {
  if (!API_URL) return;
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error(`Không xóa được sách (lỗi ${res.status})`);
  }
}
