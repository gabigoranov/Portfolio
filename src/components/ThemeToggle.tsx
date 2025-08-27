import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const {theme, toggleTheme} = useTheme();

  return (
    <button aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} className="theme-toggle" onClick={toggleTheme}>
      {theme == "dark" ? <LuSun /> : <LuMoon />}
    </button>
  );
}
