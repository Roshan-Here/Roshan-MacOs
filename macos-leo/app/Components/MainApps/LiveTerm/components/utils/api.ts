import axios from 'axios';
import { QuoteResponse } from '../Props/apiProps';
import { GithubReadme, GithubUsername } from '../hooks/Datas';


export const getProjects = async () => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${GithubUsername}/repos`);
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return 'Failed to fetch GitHub projects. Please try again later.';
  }
};

export const getReadme = async () => {
  try {
    const { data } = await axios.get(GithubReadme);
    return data;
  } catch (error) {
    console.error('Error fetching README:', error);
    return 'Failed to fetch README. Please try again later.';
  }
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return `Failed to fetch weather for ${city}. Please try again later.`;
  }
};

export const getQuote = async (): Promise<QuoteResponse | string> => {
    try {
        const { data } = await axios.get('https://quoted.deno.dev/api/random');
        return {
            quote: data.quote,
            author: data.author,
        };
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'Failed to fetch quote. Please try again later.';
    }
};
