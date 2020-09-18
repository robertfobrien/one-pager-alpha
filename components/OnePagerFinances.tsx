import React from 'react';
import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
import { Progress } from "@chakra-ui/core";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/core";

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  const formatFinanceNumber = (financeNumber: number) => {
    var num = new Number(financeNumber); 
    var financeNumberString = num.toString();
    
    for(var i = financeNumberString.length-3; i > 0; i-=3)
    {
      const front = financeNumberString.substring(0,i);
      const back = financeNumberString.substring(i);

      financeNumberString = front + "," + back;
      console.log(i + " " +financeNumberString);
    }
    return `$${financeNumberString}`;
  };

  const percentRaised = (100 * (onePagerData.fundsRaisedInStage / onePagerData.fundraisingStageGoal)).toFixed(0);
  //console.log(onePagerData.fundsRaisedInStage+ " " + onePagerData.fundraisingStageGoal + " $" + percentRaised);


  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
      </SubHeading>
      <SubHeading>
        Funding Use: {onePagerData.fundraisingDetails}
      </SubHeading>
      <CircularProgress value={percentRaised} color="#0070f3" size="100px" align="center">
          <CircularProgressLabel>%{percentRaised}</CircularProgressLabel>
      </CircularProgress>
    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
