import { GithubUsername, linkedinUsername, Myemail, MyName, Tusername } from '../../hooks/Datas';



// About
export const about = async (): Promise<string> => {
  return `Hi, I am ${MyName}. 
More about me:
type 'github' - my github .
type 'linkdin' - my linkdin .`;
};



// Contact
export const email = async (): Promise<string> => {
  window.open(`mailto:${Myemail}`);
  return `Opening mailto:${Myemail}...`;
};

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${GithubUsername}/`);

  return 'Opening github...';
};

export const linkedin = async (): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${linkedinUsername}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (): Promise<string> => {
  return `${Tusername}`;
};

export const ls = async (): Promise<string> => {
  return `Unable to list the directories`;
};

export const cd = async (): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (): Promise<string> => {
  return new Date().toString();
};

export const vi = async (): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=-euUGPQZoHw', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (): string => {
  return `Roshan's MacOs [Version 1.0234]
Type 'help' to see the list of available commands.`;
};