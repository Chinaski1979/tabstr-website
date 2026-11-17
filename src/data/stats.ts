export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export const STATS: Stat[] = [
  { value: 30, label: "gratis para operar tu local, no solo una demo", suffix: " días" },
  { value: 5, label: "sistemas operativos: Android, iOS, Windows, macOS y Linux" },
  { value: 4.4, label: "versión de facturación electrónica de Hacienda", prefix: "v", decimals: 1 },
  { value: 0, label: "de licencia por cada dispositivo extra", prefix: "₡" },
];
