import { create } from "zustand";
import { persist } from "zustand/middleware";

type Brightness = {
  brightnessvalue: number;
};

type BrightnessAction = {
  setBrighntnessvalue: (value: number) => void;
};

const BrightnessStore = create<Brightness & BrightnessAction>()(
  persist(
    (set) => ({
      brightnessvalue: 50,
      setBrighntnessvalue: (value: number) => set({ brightnessvalue: value }),
    }),
    {
      name: "BrightnessStore",
    }
  )
);

type Sound = {
  soundvalue: number;
};

type SoundAction = {
  setSoundvalue: (value: number) => void;
};

const SoundStore = create<Sound & SoundAction>()(
  persist(
    (set) => ({
      soundvalue: 50,
      setSoundvalue: (value: number) => set({ soundvalue: value }),
    }),
    {
      name: "SoundStore",
    }
  )
);

type Theme = {
  isDark: boolean;
};

type ThemeActions = {
  setIsDark: () => void;
};

const UserThemeStore = create<Theme & ThemeActions>()(
  persist(
    (set, get) => ({
      isDark: false,
      setIsDark: () => {
        const currentTheme = get().isDark;
        set({ isDark: !currentTheme });
      },
    }),
    {
      name: "UserTheme",
    }
  )
);

type FileData = {
  id: string;
  name: string;
};

type FileDataActions = {
  setFile: (id: string, name: string) => void;
};

const useFileStore = create<FileData & FileDataActions>()(
  persist(
    (set) => ({
      id: "",
      name: "",
      setFile: (id: string, name: string) => set({ id, name }),
    }),
    {
      name: "FileData",
    }
  )
);


export default { useFileStore, UserThemeStore, BrightnessStore, SoundStore };
