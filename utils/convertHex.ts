export const convertHex = (hexCode: string, opacity: number): string => {
    // Remove the # character if it exists
    hexCode = hexCode.replace("#", "");
  
    // Check if the hex code is valid
    const isValidHex = /^([A-Fa-f0-9]{3}){1,2}$/.test(hexCode);
    if (!isValidHex) {
      throw new Error("Invalid hex code");
    }
  
    // Convert the hex code to an array of two-character chunks
    const chunks = hexCode.match(/.{1,2}/g);
  
    // Convert the chunks to decimal values
    const [r, g, b] = chunks!.map((chunk) => parseInt(chunk, 16));
  
    // Validate the opacity value
    if (opacity < 0 || opacity > 1) {
      throw new Error("Opacity value should be between 0 and 1");
    }
  
    // Return the RGBA string
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  