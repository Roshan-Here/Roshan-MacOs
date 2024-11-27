export type NavbarProps = {
    DarkTheme: boolean;
    handleTheme: (DarkTheme: boolean, SetDarkTheme: React.Dispatch<React.SetStateAction<boolean>>) => void;
  };