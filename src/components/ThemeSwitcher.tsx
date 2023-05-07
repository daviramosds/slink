import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggleSwitch = () => {
    setEnabled(!enabled);

    switch (theme) {
      case "light":
        setTheme("dark");
        break;

      case "dark":
        setTheme("light");
        break;

      default:
        setTheme("light");
        break;
    }
  };

  return (
    <div className="absolute top-5 right-5">
      <Switch
        checked={enabled}
        onChange={handleToggleSwitch}
        className={`${enabled ? "bg-blue-500" : "bg-blue-800"}
      relative inline-flex h-[25px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6" : "translate-x-0"}
        pointer-events-none inline-block h-[21px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
