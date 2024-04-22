import { useState } from 'react'
import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from "./image/motociclista-musculoso-domina-carrera-terreno-montanoso-extremo-generada-ia_188544-19030.jpg"
function App() {
  
return (
  <>
    <Box 
    h="40vh" 
    bg="gray" 
    bgImage={`url(${bgImage})`}
    bgRepeat="no-repeat"
    bgSize="cover"
    
    >
      <Flex
      direction="column"
      alignItems="center"
      justify="center"
      h="100%"
      bg="rgb(0 0 0 / 50%)">
        
      <Heading
      color="white"
      textTransform="uppercase"
      textAlign="center"
      fontFamily="fantasy"
      fontWeight="light"
      letterSpacing="5px">
        Domina el Terreno
      </Heading>

      <Stack
      direction="row"
      spacing="40px"
      >
      <Button variant="outline">Ver Detalles</Button>
      <Button variant="outline">Ver Videos</Button> 
      </Stack>
      
      </Flex>
      
    </Box>
  </>
);
}

export default App
