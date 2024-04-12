import axios from 'axios';
import {APIKEY} from '../../src/constants/';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + APIKEY,
  },
});

const chatGPTEndpoint = 'https://api.openai.com/v1/chat/completions/';

const dalleEndpoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async () => {
  try {
    const response = await client.post(chatGPTEndpoint, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'Hello!',
        },
      ],
    });

    console.log('FETCH ERROR', response);
    const isArt = response.data?.choices[0]?.message?.content;
    if (isArt.toLowerCase().includes('yes')) {
      console.log('dalle api call');
      //   return dalleApiCall(prompt, messages || []);
    } else {
      console.log('chat gpt api call');
      //   return chatGptApiCall(prompt, messages || []);
    }
    console.log('RESPONSE: ', response);
  } catch (error: any) {
    console.log('FETCH ERROR', error.message);
    // return Promise.resolve({success: false, msg: error.message});
  }
};

const chatGptApiCall = async (prompt: any, messages: any) => {
  try {
    const response = await client.post(chatGPTEndpoint, {
      model: 'gpt-3.5-turbo',
      messages: messages,
    });

    let answer = response.data?.choices[0]?.message?.content;
    messages.push({role: 'assistant', content: answer.trim()});
    return Promise.resolve({success: true, data: messages});
  } catch (error: any) {
    console.log(error);
    return Promise.resolve({success: false, msg: error.message});
  }
};

const dalleApiCall = async (prompt: any, messages: any) => {
  try {
    const response = await client.post(dalleEndpoint, {
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '512x512',
    });

    let url = response.data?.data[0]?.url;
    console.log('url image: ', url);
    messages.push({role: 'assistant', content: url});
    return Promise.resolve({success: true, data: messages});
  } catch (error: any) {
    console.log(error);
    return Promise.resolve({success: false, msg: error.message});
  }
};
