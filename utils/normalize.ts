import { Dimensions } from 'react-native';

// Replace these values with your maximum reference screen dimensions
const maxWidth = 414; // Maximum width of the design (for example, iPhone 11 Pro Max width)
const maxHeight = 896; // Maximum height of the design (for example, iPhone 11 Pro Max height)

export const normalize = (size: number): number => {
  const { width, height } = Dimensions.get('window');
  const widthRatio = width / maxWidth;
  const heightRatio = height / maxHeight;
  const scale = Math.min(widthRatio, heightRatio);
  return Math.round(size * scale);
};
