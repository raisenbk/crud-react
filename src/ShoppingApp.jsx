import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ShoppingListApp() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const addItem = (newItem) => {
    const isDuplicate = items.find(
      (item) =>
        item.name.trim().toLowerCase() === newItem.name.trim().toLowerCase()
    ); // Membandingkan itemname dengan newitem (yang mau ditambahkan)
    //trim untuk menghapus spasi di depan sebelum dibandingkan
    if (isDuplicate) {
      // Jika ditemukan item dengan nama yang sama, munculkan alert
      alert("Isi list tidak boleh ada duplikat");
      return;
    }

    // Jika newItem kosong (hanya spasi), tampilkan alert
    if (newItem.name.trim() === "") {
      alert("Isi list tidak boleh kosong");
      return; // Hentikan penambahan jika input kosong
    }
    setItems([...items, newItem]);
  };

  const editItem = (index, updatedItem) => {
    const isDuplicate = items.find(
      (item) =>
        item.name.trim().toLowerCase() === updatedItem.name.trim().toLowerCase()
    ); // Membandingkan itemname dengan newitem (yang mau ditambahkan)
    //trim untuk menghapus spasi di depan sebelum dibandingkan
    if (isDuplicate) {
      // Jika ditemukan item dengan nama yang sama, munculkan alert
      alert("Isi list tidak boleh ada duplikat");
      return;
    }

    // Jika newItem kosong (hanya spasi), tampilkan alert
    if (updatedItem.name.trim() === "") {
      alert("Isi list tidak boleh kosong");
      return; // Hentikan penambahan jika input kosong
    }
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
    setEditIndex(null); // Ini buat exit (Edit Mode)
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Form untuk menambahkan item baru */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newItemName = e.target.itemName.value;
            addItem({
              id: Date.now(),
              name: newItemName,
              notes: "",
            });
            e.target.reset();
          }}
        >
          <input
            type="text"
            name="itemName"
            className="rounded-md px-3 py-2 border"
            placeholder="Item name"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Add Item
          </button>
        </form>
        {/* Toggle untuk fitur pencarian */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="searchToggle"
            className="mr-2"
            checked={showSearch}
            onChange={() => setShowSearch(!showSearch)}
          />
          <label htmlFor="searchToggle">Show Search</label>
        </div>

        {/* Pencarian */}
        {showSearch && (
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items..."
            className="mt-4 rounded-md px-3 py-2 border"
          />
        )}

        {/* List of items */}
        <ul className="mt-4">
          {filteredItems.map((item, index) => (
            <li
              key={item.id}
              className="flex items-center justify-between py-2 border-b"
            >
              {editIndex === index ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="rounded-md px-3 py-2 border"
                />
              ) : (
                <span>{item.name}</span>
              )}
              <div>
                <div className="">
                  {/* Toggle untuk fitur catatan tambahan */}
                  <input
                    type="checkbox"
                    id={`notesToggle${index}`}
                    className="mr-2"
                    checked={showNotes}
                    onChange={() => setShowNotes(!showNotes)}
                  />
                  <label className="mr-10 ml-3" htmlFor={`notesToggle${index}`}>
                    Show Notes
                  </label>
                </div>
                {/* Catatan tambahan */}
                {showNotes && (
                  <textarea
                    value={item.notes}
                    onChange={(e) => {
                      const updatedItems = [...items];
                      updatedItems[index].notes = e.target.value;
                      setItems(updatedItems);
                    }}
                    placeholder="Additional notes..."
                    className="mt-2 rounded-md px-3 py-2 border items-center"
                  />
                )}
                {editIndex === index ? (
                  <div className="flex mt-3">
                    <button
                      onClick={() => {
                        editItem(index, { ...item, name: editedName });
                        setEditedName(""); //Ini Buat Reset Namenya (Edit)
                      }}
                      className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex mt-3">
                    <button
                      onClick={() => {
                        setEditIndex(index);
                        setEditedName(item.name);
                      }}
                      className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeItem(index)}
                      className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
