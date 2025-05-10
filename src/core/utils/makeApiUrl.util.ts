import Config from 'react-native-config';

export const makeApiUrl = (path: string) => `${Config.API_URL}/${path}`;
