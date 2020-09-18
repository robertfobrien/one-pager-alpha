import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { OnePagerData } from '../model/model';
import { Box, Heading, Text, Divider, Image, Stack, Button, Collapse} from '@chakra-ui/core';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/core";

import { Header } from './Header';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';
import { ContentCard } from './ContentCard';

/** Renders the home component. */
export const Home = () => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState(
    []
  );

  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

  return (
    <Box>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <Box d='flex' justifyContent='center'>
        <Box w='xl'>
          <Heading as='h1' size='xl'>
            Welcome to One Pager Alpha!
          </Heading>

        

          <Heading as='h2' size='md'>
            View active OnePagers
          </Heading>


          <Divider />

          <OnePagerLinks onePagers={onePagers} />

          <Divider /> 

          <ShowOnePagerInfo />
        </Box>
      </Box>
    </Box>
  );
};


type OnePagerLinksProps = {
  onePagers: OnePagerPublicData[];
};


function ShowOnePagerInfo() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return(
    <>
      <Button variantColor="blue" onClick={handleToggle}>
        What is a OnePager?
      </Button>
      <Collapse mt={4} isOpen={show}>
        OnePagers allow companies to put all their info in one place. With a sharable OnePager link, you can let investors know what your company is all about, your funding goals, and everything in between. 
      </Collapse>
    </>

  );
}

const OnePagerLinks = ({ onePagers }: OnePagerLinksProps) => {
  return (
    <>
    
      {onePagers.map((onePagerData: OnePagerPublicData) => (
        <ContentCard>
        <Box key={onePagerData.companyName} marginBottom='10px' alignItems="center">
          <Image rounded="full" alignContent="right" size="40px" src={onePagerData.logo} alt={onePagerData.companyName}/>
           
          <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}>
            <Text textAlign="left" fontSize="30x" color="#63B3ED" as="u">{onePagerData.companyName}</Text> 
          </Link> 
          <Text margin='0'>{onePagerData.briefDescription}</Text>
          <hr/>
        </Box>
        </ContentCard>
      ))
      
}
    
    </>
    
        
  );
};
