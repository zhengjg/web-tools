export const barcodeTypeOptions = [
  {
    label: "CODE128",
    options: [
      { label: "CODE128Auto", value: "CODE128" },
      { label: "CODE128 A", value: "CODE128A" },
      { label: "CODE128 B", value: "CODE128B" },
      { label: "CODE128 C", value: "CODE128C" },
    ],
  },
  {
    label: "EAN",
    options: [
      { label: "EAN-13", value: "EAN13" },
      { label: "EAN-8", value: "EAN8" },
      { label: "EAN-5", value: "EAN5" },
      { label: "EAN-2", value: "EAN2" },
    ],
  },
  { label: "UPC", value: "UPC" },
  { label: "CODE39", value: "CODE39" },
  {
    label: "ITF",
    options: [
      { label: "ITF", value: "ITF" },
      { label: "ITF-14", value: "ITF14" },
    ],
  },
  {
    label: "MSI",
    options: [
      { label: "MSI10", value: "MSI10" },
      { label: "MSI11", value: "MSI11" },
      { label: "MSI1010", value: "MSI1010" },
      { label: "MSI1110", value: "MSI1110" },
    ],
  },
  { label: "Pharmacode", value: "pharmacode" },
  { label: "Codabar", value: "codabar" },
];
