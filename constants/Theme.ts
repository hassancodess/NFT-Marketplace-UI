import { normalize } from "@/utils/normalize";

export const colors: Record<string, string> = {
    danger: "#F26666",
    success: "#00CB6A",
    grayLight: "#AAB8C2",
    white: "#F5F8FA",
    dark: "#15202B",
    gray: "#253341",
    blue: "#1D9BF0"
  };

  export const fonts: Record<string, string> = {
    light: "Poppins-Light",
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    bold: "Poppins-Bold",
  };
  
  
  export const sizes: Record<string, number> = {
    "XS": normalize( 4),
    "SM": normalize(6),
    "LG": normalize(8),
    "XL": normalize(10),
    "XL2": normalize(12),
    "XL3": normalize(14),
    "XL4": normalize(16),
    "XL5": normalize(18),
    "XL6": normalize(20),
    "XL7": normalize(24),
    "XL8": normalize(28),
    "XL9": normalize(32),
    "XL10": normalize(36),
    "XL11": normalize(40),
    "XL12": normalize(44),
    "XL13": normalize(48),
    "XL14": normalize(56),
  };
  