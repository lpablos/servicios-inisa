import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

export default function ExamplePage() {
    return (
        <Box p={4}>
            <Heading>Bienvenido a Chakra UI en Laravel + Inertia</Heading>
            <Button colorScheme="teal" mt={4}>
                Cotizacion
            </Button>
        </Box>
    );
}
