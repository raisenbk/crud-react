import React, { useState } from "react";

export default function ShoppingListApp() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [completedItems, setCompletedItems] = useState([]);
  const [filter, setFilter] = useState("All");

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
    updatedItems[items.findIndex((e) => e?.id === index)] = updatedItem;
    setItems(updatedItems);
    setEditIndex(null); // Ini buat exit (Edit Mode)
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => item.id !== index));
  };

  const toggleCompletion = (index) => {
    const updatedCompletedItems = [...completedItems];
    if (completedItems.includes(index)) {
      updatedCompletedItems.splice(updatedCompletedItems.indexOf(index), 1);
    } else {
      updatedCompletedItems.push(index);
    }
    setCompletedItems(updatedCompletedItems);
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  console.log("completedItems ", completedItems);
  let filteredItems = items
    .filter((e, i) => {
      if (filter === "Done") {
        return completedItems.includes(e?.id);
      } else if (filter === "Todo") {
        return !completedItems.includes(e?.id);
      } else {
        return true;
      }
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const deleteAll = () => {
    setItems([]);
  };

  const deleteDone = () => {
    setItems(items.filter((item) => !completedItems.includes(item.id)));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
  };

  const toggleNotes = (itemId) => {
    setShowNotes((prevShowNotesForItem) => ({
      ...prevShowNotesForItem,
      [itemId]: !prevShowNotesForItem[itemId],
    }));
  };
  return (
    <div className="">
      <section class="bg-cover bg-fixed bg-no-repeat bg-[url('https://images7.alphacoders.com/133/1339451.png')] bg-gray-400 bg-blend-multiply py-[225px]">
        <div class="px-4 mx-auto max-w-screen-xl text-center  ">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            List your concert(s) here
          </h1>
          <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
            Find your groove, catch your favorite artists, and immerse yourself
            in the thrill of live music. Welcome to Concert Lists – where every
            beat brings you closer to an unforgettable experience.
          </p>
          {/* Form untuk menambahkan item baru */}
          <form
            className="pt-4"
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
            <div className="flex gap-2 justify-center">
              <input
                type="text"
                name="itemName"
                className="rounded-md px-3 py-2 border-2"
                placeholder="Concert name"
              />
              <button
                type="submit"
                className="flex gap-2 justify-end items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Add
              </button>
            </div>
          </form>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
        </div>

        {/* Filter */}
        <div className="pt-10  ">
          <div className="flex justify-center  space-x-20">
            <button
              onClick={() => handleFilter("All")}
              className="flex  gap-2 ml-2 px-16 py-2 rounded-full bg-neutral-100  hover:bg-neutral-300 focus:outline-none focus:ring focus:ring-neutral-400 text-neutral-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
              All
            </button>
            <button
              onClick={() => handleFilter("Done")}
              className="flex items-center gap-2 ml-2 px-16 py-2 rounded-full bg-neutral-100  hover:bg-neutral-300 focus:outline-none focus:ring focus:ring-neutral-400 text-neutral-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              Visited
            </button>
            <button
              onClick={() => handleFilter("Todo")}
              className="flex gap-2 ml-2 px-16 py-2 rounded-full bg-neutral-100  hover:bg-neutral-300 focus:outline-none focus:ring focus:ring-neutral-400 text-neutral-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
              Todo
            </button>
          </div>
        </div>
        {/* Pencarian */}
        <div className="flex justify-end pr-[150px]">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="rounded-md px-3 py-2 border-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-9 h-9"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </form>
        </div>
        <div className="container mx-auto px-4 py-8">
          {/* List of items */}
          <ul className="mt-5">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-2 border-b"
              >
                {editIndex === item?.id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="rounded-md px-3 py-2 border"
                  />
                ) : (
                  <span
                    className={
                      completedItems.includes(item?.id)
                        ? "line-through decoration-red-500 text-red-500"
                        : "text-white"
                    }
                  >
                    {item.name}
                  </span>
                )}
                <div>
                  {/* Toggle untuk fitur completed */}
                  <div className="flex gap-3 ml-3">
                    <input
                      type="checkbox"
                      id={`completeToggle${item?.id}`}
                      checked={completedItems.includes(item?.id)}
                      onChange={() => toggleCompletion(item?.id)}
                      className=""
                    />
                    <label
                      className=" text-white"
                      htmlFor={`completeToggle${item?.id}`}
                    >
                      Visited
                    </label>
                  </div>

                  {editIndex === item.id ? (
                    <div className="flex mt-3">
                      <button
                        onClick={() => {
                          editItem(item.id, { ...item, name: editedName });
                          setEditedName(""); //Ini Buat Reset Namenya (Edit)
                        }}
                        className="flex items-center gap-2 ml-2 px-4 py-2 bg-neutral-100 text-neutral-600 rounded-md hover:bg-neutral-300 focus:outline-none focus:ring focus:ring-neutral-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 13.25V3.5h8v9.75a.75.75 0 0 1-1.064.681L10 12.576l-2.936 1.355A.75.75 0 0 1 6 13.25Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex mt-3">
                      <button
                        onClick={() => {
                          setEditIndex(item.id);
                          setEditedName(item.name);
                        }}
                        className="flex items-center gap-2 ml-2 px-4 py-2 bg-neutral-100 text-neutral-600 rounded-md hover:bg-neutral-300 focus:outline-none focus:ring focus:ring-neutral-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-5 h-5"
                        >
                          <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex gap-2 ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center space-x-20 pt-[100px]">
          <button
            onClick={() => deleteDone()}
            className="flex gap-2 ml-2 px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
            Delete Visited
          </button>
          <button
            onClick={() => deleteAll()}
            className="flex gap-2 ml-2 px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
              <path
                fill-rule="evenodd"
                d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
            Delete All
          </button>
        </div>
      </section>
    </div>
  );
}
