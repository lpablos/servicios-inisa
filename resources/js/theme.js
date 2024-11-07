import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        brand: {
            500: '#1a365d',
            600: '#153e75',
            700: '#2a69ac',
        },
    },
});

export default customTheme;

