import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

import { Repo,QuoteResponse } from '../../Types/apiProps';

export const projects = async (): Promise<string> => {
  try {
    const projects: Repo[] = await getProjects();
    if (projects.length === 0) {
      return 'No projects found.';
    }

    return projects
      .map(
        (repo) =>
          `${repo.name} - <a class="text-violet-400 underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`
      )
      .join('\n');
  } catch (error) {
    console.error('Error fetching projects:', error);
    return 'Failed to fetch GitHub projects. Please try again later.';
  }
};

export const quote = async (): Promise<QuoteResponse | string> => {
  const data = await getQuote();
  
  if (typeof data === 'string') {
      // Handle the error message returned from getQuote
      return data;
  }

  return `“${data.quote}” — ${data.author}` 
};


  export const readme = async (): Promise<string> => {
  try {
    const readme = await getReadme();
    return `Opening GitHub README...\n\n${readme}`;
  } catch (error) {
    console.error('Error fetching README:', error);
    return 'Failed to fetch README. Please try again later.';
  }
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join(' ');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }

  try {
    const weatherData = await getWeather(city);
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return `Failed to fetch weather for ${city}. Please try again later.`;
  }
};
