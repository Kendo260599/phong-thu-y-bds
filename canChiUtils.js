import { convertSolar2Lunar } from "viet-lunar-calendar";

const canList = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const chiList = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

export function convertToCanChi(dateStr, hour) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const [lunarDay, lunarMonth, lunarYear] = convertSolar2Lunar(day, month, year, 7);

  const canYear = canList[(lunarYear + 6) % 10];
  const chiYear = chiList[(lunarYear + 8) % 12];

  const tuTru = [
    `${canYear} ${chiYear}`, // Năm
    "Tạm tính tháng",         // Bạn có thể nâng cấp chính xác hơn
    "Tạm tính ngày",
    `Giờ ${hour}`
  ];

  return {
    lunar: `${lunarDay}/${lunarMonth}/${lunarYear}`,
    canChiNam: `${canYear} ${chiYear}`,
    nguHanh: "Mộc", // Giả định, có thể thay bằng tính thực tế
    tuTru
  };
}