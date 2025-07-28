import React from "react";

function ResultDisplay({ result }) {
  return (
    <div style={{ marginTop: "2rem", backgroundColor: "#fff6e0", padding: "1rem", borderRadius: "10px" }}>
      <h2>Kết quả phân tích</h2>
      <p><strong>Âm lịch:</strong> {result.lunar}</p>
      <p><strong>Tứ trụ:</strong> {result.tuTru.join(" - ")}</p>
      <p><strong>Can Chi năm:</strong> {result.canChiNam}</p>
      <p><strong>Ngũ hành bản mệnh:</strong> {result.nguHanh}</p>
      {/* Bạn có thể thêm các phần khác ở đây như Kim Lâu, Hoang Ốc, Tam Tai */}
    </div>
  );
}

export default ResultDisplay;