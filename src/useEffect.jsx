import { useState } from "react";
import { useEffect } from "react";

export default function UseEffect() {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    // BENTUK USEEFFECT YANG SERING DIPAKAI
    console.log("USE EFFECT HANYA JALAN 1 KALI KETIKA APLIKASI DI RENDER");
  }, []); // CIRINYA ADA ARRAY KOSONG

  useEffect(() => {
    console.log("AKAN JALAN SETIAP ADA PERUBAHAN PD DATA");
  }, [data]); //CIRINYA ADA VAR DI ARRAY

  useEffect(() => {
    //USE EFFECT PALING JARANG
    console.log("AKAN JALAN SETIAP ADA PERUBAHAN PD DATA");
  }); //CIRINYA TIDAK ADA ARRAY

  return (
    <div>
      <div>USE EFFECT</div>
      <div>
        <input
          placeholder="INPUT"
          value={data}
          onChange={(e) => setData(e?.target?.value)}
        />
        <input
          placeholder="OUTPUT"
          value={output}
          onChange={(e) => setOutput(e?.target?.value)}
        />
      </div>
    </div>
  );
}
