import React, { useState } from "react";
import { convertToCanChi } from "../utils/canChiUtils";

function InputForm({ onSubmit }) {
  const [birthDate, setBirthDate] = useState("");
  const [birthHour, setBirthHour] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = convertToCanChi(birthDate, parseInt(birthHour));
    onSubmit(result);
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "1rem", borderRadius: "10px" }}>
      <label>
        Ngày tháng năm sinh (dương lịch):<br />
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Giờ sinh (0–23):<br />
        <input
          type="number"
          value={birthHour}
          onChange={(e) => setBirthHour(e.target.value)}
          min="0"
          max="23"
        />
      </label>
      <br />
      <button type="submit">Xem phong thủy</button>
    </form>
  );
}

export default InputForm;