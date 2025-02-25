import * as bin from './index';
import { GithubUsername,linkedinUsername, Myemail, MyName, Tusername } from '../../hooks/Datas';


// Help
// export const help = async (args: string[]): Promise<string> => {
//   const commands = Object.keys(bin).sort().join(', ');
//   var c = '';
//   for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
//     if (i % 7 === 0) {
//       c += Object.keys(bin).sort()[i - 1] + '\n';
//     } else {
//       c += Object.keys(bin).sort()[i - 1] + ' ';
//     }
//   }
//   return `Welcome! Here are all the available commands:
// \n${c}\n
// [tab]: trigger completion.
// [ctrl+l]/clear: clear terminal.\n
// Type 'morehelp' to display all .
// `;
// };

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${MyName}. 
More about me:
type 'github' - my github .
type 'linkdin' - my linkdin .`;
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${Myemail}`);
  return `Opening mailto:${Myemail}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${GithubUsername}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
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

export const whoami = async (args: string[]): Promise<string> => {
  return `${Tusername}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Unable to list the directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=-euUGPQZoHw', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `Roshan's MacOs [Version 1.0234]
Type 'help' to see the list of available commands.`;
};