import { Flex, Badge, Heading, Text } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
import {Image } from '@chakra-ui/core';


type OnePagerOverviewProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerOverview = ({
  onePagerData,
  isLoading,
}: OnePagerOverviewProps) => {
  return (
    <ContentCard title='Overview' isLoading={isLoading}> 
      <Image rounded="full" alignContent="right" size="100px" src={onePagerData.logo} alt={onePagerData.companyName}/>
      <Heading as='h1' size='lg' marginRight='10px'>
      {onePagerData.companyName}
      </Heading>

      <Heading as='h2' size='sm' color='grey' fontStyle='italic'>
        {onePagerData.briefDescription}
      </Heading>
      <Flex>
        {onePagerData.industryTags.map((tag: string) => {
          return (
            <Badge
              key={tag}
              rounded='full'
              px='2'
              variantColor='blue'
              marginRight='10px'
            >
              {tag}
            </Badge>
          );
        })}
      </Flex>
      <Text fontSize='sm'>{onePagerData.detailDescription}</Text>
    </ContentCard>
  );
};
