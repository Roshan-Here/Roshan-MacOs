"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Brightness = {
  brightnessvalue: number;
};

type BrightnessAction = {
  setBrightnessValue: (value: number) => void;
};

const BrightnessStore = create<Brightness & BrightnessAction>()(
  persist(
    (set) => ({
      brightnessvalue: 106,
      setBrightnessValue: (value: number) => set({ brightnessvalue: value }),
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
  setSoundValue: (value: number) => void; 
};

const SoundStore = create<Sound & SoundAction>()(
  persist(
    (set) => ({
      soundvalue: 50,
      setSoundValue: (value: number) => set({ soundvalue: value }),
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

export { useFileStore, UserThemeStore, BrightnessStore, SoundStore };