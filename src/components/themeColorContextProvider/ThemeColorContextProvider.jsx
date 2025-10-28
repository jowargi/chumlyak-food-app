import { createContext, useCallback, useContext, useState } from "react";

const ThemeColorContext = createContext();

export const useThemeColorContext = () => useContext(ThemeColorContext);

export default function ThemeColorContextProvider({ children }) {
  const [themeColor, setThemeColor] = useState("light");

  const setLightTheme = useCallback(() => setThemeColor("light"), []);
  const setDarkTheme = useCallback(() => setThemeColor("dark"), []);

  return (
    <ThemeColorContext.Provider
      value={{ themeColor, setLightTheme, setDarkTheme }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
}
