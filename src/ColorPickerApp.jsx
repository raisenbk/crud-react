import { useState } from "react";

function ColorPickerApp() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  if (isNaN(red) || isNaN(green) || isNaN(blue)) {
    if (alert("Invalid Data Input")) {
    } else window.location.reload();
    return;
  }
  if (
    red > 255 ||
    red < 0 ||
    green > 255 ||
    green < 0 ||
    blue > 255 ||
    blue < 0
  ) {
    if (alert("Nilai Input Harus Diantara 0 dan 255")) {
    } else window.location.reload();
    return;
  }
  const white = () => {
    setRed(255);
    setGreen(255);
    setBlue(0);
    return;
  };
  const silver = () => {
    setRed(192);
    setGreen(192);
    setBlue(192);
    return;
  };
  const gray = () => {
    setRed(128);
    setGreen(128);
    setBlue(128);
    return;
  };
  const black = () => {
    setRed(0);
    setGreen(0);
    setBlue(0);
    return;
  };
  const maroon = () => {
    setRed(128);
    setGreen(0);
    setBlue(0);
    return;
  };
  const red2 = () => {
    setRed(255);
    setGreen(0);
    setBlue(0);
    return;
  };

  const orange = () => {
    setRed(255);
    setGreen(165);
    setBlue(0);
    return;
  };
  const yellow = () => {
    setRed(255);
    setGreen(255);
    setBlue(0);
    return;
  };
  const olive = () => {
    setRed(128);
    setGreen(128);
    setBlue(0);
    return;
  };

  const lime = () => {
    setRed(255);
    setGreen(0);
    setBlue(0);
    return;
  };
  const green2 = () => {
    setRed(0);
    setGreen(128);
    setBlue(0);
    return;
  };
  const aqua = () => {
    setRed(0);
    setGreen(255);
    setBlue(255);
    return;
  };
  const blue2 = () => {
    setRed(0);
    setGreen(0);
    setBlue(255);
    return;
  };
  const navy = () => {
    setRed(0);
    setGreen(0);
    setBlue(128);
    return;
  };
  const teal = () => {
    setRed(0);
    setGreen(128);
    setBlue(128);
    return;
  };
  const fuchsia = () => {
    setRed(255);
    setGreen(0);
    setBlue(255);
    return;
  };
  const purple = () => {
    setRed(128);
    setGreen(0);
    setBlue(128);
    return;
  };

  return (
    <div className="bg-[#5e5e63] border rounded border-black">
      <div
        className="font-bold text-4xl py-5"
        style={{ color: `rgb(${red}, ${green}, ${blue})` }}
      >
        COLOR PICKER
      </div>
      <div
        className="w-suto h-[200px] border-[6px] border-black rounded"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></div>
      <div className="items-center justify-center bg-[#5e5e63] p-10 border rounded border-black">
        <div className="p-5 text">
          <label className="text-red-500 font-semibold">Red : </label>
          <input
            className="border rounded"
            value={red}
            onChange={(e) => setRed(e.target.value)}
          />
        </div>
        <div className="p-5">
          <label className="text-green-500 font-semibold">Green : </label>
          <input
            className="border rounded"
            value={green}
            onChange={(e) => setGreen(e.target.value)}
          />
        </div>
        <div className="p-5">
          <label className="text-blue-500 font-semibold">Blue : </label>
          <input
            className="border rounded"
            value={blue}
            onChange={(e) => setBlue(e.target.value)}
          />
        </div>
        <p className="font-semibold pb-5 text-gray-300">
          {red}, {green}, {blue}
        </p>
        {/* BUTTON WARNA */}
        <div className="space-x-4 space-y-4">
          <button
            className="rounded bg-[#fff] px-2.5 py-2 text-gray-500 font-semibold"
            onClick={() => white()}
          >
            WHITE
          </button>
          <button
            className="rounded bg-[#c0c0c0] px-2.5 py-2 text-black font-semibold"
            onClick={() => silver()}
          >
            SILVER
          </button>
          <button
            className="rounded bg-[#808080] px-2.5 py-2 text-white font-semibold"
            onClick={() => gray()}
          >
            GRAY
          </button>
          <button
            className="rounded bg-[#000] px-2.5 py-2 text-white font-semibold"
            onClick={() => black()}
          >
            BLACK
          </button>
          <button
            className="rounded bg-[#800000] px-2.5 py-2 text-white font-semibold"
            onClick={() => maroon()}
          >
            MAROON
          </button>
          <button
            className="rounded bg-[#f00] px-2.5 py-2 text-white font-semibold"
            onClick={() => red2()}
          >
            RED
          </button>
          <button
            className="rounded bg-[#ffa500] px-2.5 py-2 text-white font-semibold"
            onClick={() => orange()}
          >
            ORANGE
          </button>
          <button
            className="rounded bg-[#ff0] px-2.5 py-2 text-orange-500 font-semibold"
            onClick={() => yellow()}
          >
            YELLOW
          </button>
          <button
            className="rounded bg-[#808000] px-2.5 py-2 text-white font-semibold"
            onClick={() => olive()}
          >
            OLIVE
          </button>
          <button
            className="rounded bg-[#0f0] px-2.5 py-2 text-white font-semibold"
            onClick={() => lime()}
          >
            LIME
          </button>
          <button
            className="rounded bg-[#008000] px-2.5 py-2 text-white font-semibold"
            onClick={() => green2()}
          >
            GREEN
          </button>
          <button
            className="rounded bg-[#0ff] px-2.5 py-2 text-white font-semibold"
            onClick={() => aqua()}
          >
            AQUA
          </button>
          <button
            className="rounded bg-[#00f] px-2.5 py-2 text-white font-semibold"
            onClick={() => blue2()}
          >
            BLUE
          </button>
          <button
            className="rounded bg-[#000080] px-2.5 py-2 text-white font-semibold"
            onClick={() => navy()}
          >
            NAVY
          </button>
          <button
            className="rounded bg-[#008080] px-2.5 py-2 text-white font-semibold"
            onClick={() => teal()}
          >
            TEAL
          </button>
          <button
            className="rounded bg-[#f0F] px-2.5 py-2 text-white font-semibold"
            onClick={() => fuchsia()}
          >
            FUCHSIA
          </button>
          <button
            className="rounded bg-[#800080] px-2.5 py-2 text-white font-semibold"
            onClick={() => purple()}
          >
            PURPLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorPickerApp;
