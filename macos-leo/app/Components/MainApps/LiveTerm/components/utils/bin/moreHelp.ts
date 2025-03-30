const help = async (): Promise<string> => {
  {
    return `Welcome! Here are all the available commands
'echo'
'ls'
'sudo'
'quote'
'weather'
'readme'
'projects'
'about'
'github'
'linkdin'
'email'
'google'
'duckduckgo'
'bing'
'reddit'
'whoami'
'date'

[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.`;
  }
};

export default help;
