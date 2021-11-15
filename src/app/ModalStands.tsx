import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

interface StandElements {
  id: number;
  title: string;
  reward: boolean;
  available?: number;
  pledge?: string;
  description: string;
}
const ModalStands = ({handleModalButton}: {handleModalButton: () => void}) => {
  const ModalStandItem = (props: StandElements) => {
    const pledgeLabel = props.reward ? (
      <Text color="primary.500" fontWeight="700">
        {props.pledge}
      </Text>
    ) : null;
    const availableLabel =
      props.pledge && props.reward ? (
        <Stack alignItems="center" direction={["row", "row"]}>
          <Text fontSize="2xl" fontWeight="700">
            {props.available}
          </Text>
          <Text color="secondary.500" fontSize="sm" fontWeight="400">
            left
          </Text>
        </Stack>
      ) : null;

    return (
      <Stack>
        <Radio colorScheme="primary" /* variant="ghost" */ value={props.id}>
          {/* <Stack direction={["row", "row"]} justifyContent="space-between">
            <Stack direction={["row", "row"]} spacing={8}>
              <Text _hover={{color: "primary.600", cursor: "pointer"}} fontWeight="700">
                {props.title}
              </Text>
              {pledgeLabel}
            </Stack>
            {availableLabel}
          </Stack> */}
          <Text color="secondary.500">{props.description}</Text>
        </Radio>
      </Stack>
    );
  };
  const StandsAccordion = (props: any) => (
    <AccordionItem borderY={0} marginBottom={4}>
      {({isExpanded}) => (
        <Stack
          alignItems="flex-start"
          borderColor={isExpanded ? "primary.500" : "secondary.200"}
          borderRadius="xl"
          borderWidth={isExpanded ? 2 : 1}
          paddingTop={6}
        >
          <h2>
            <AccordionButton _focus={{outline: "none"}} _hover={{backgroundColor: "transparent"}}>
              <ModalStandItem
                available={props.available}
                description={props.description}
                id={props.id}
                pledge={props.pledge}
                reward={props.reward}
                title={props.title}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel borderTopWidth={1}>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Text color="secondary.500">Enter your pledge</Text>
              <Stack alignItems="center" direction="row">
                <InputGroup width={32}>
                  <InputLeftElement color="secondary.500" fontSize="lg" pointerEvents="none">
                    $
                  </InputLeftElement>
                  <Input
                    _focus={{borderColor: "primary.500", cursor: "pointer"}}
                    _hover={{borderColor: "primary.500", cursor: "pointer"}}
                    borderRadius="3xl"
                    fontWeight="700"
                  />
                </InputGroup>
                <Button colorScheme="primary" variant="ghost" onClick={() => handleModalButton()}>
                  Continue
                </Button>
              </Stack>
            </Stack>
          </AccordionPanel>
        </Stack>
      )}
    </AccordionItem>
  );

  return (
    <>
      <RadioGroup name="selectedStand">
        <Accordion allowToggle className="modalAccordion">
          <StandsAccordion
            description="Choose to support us without a reward if you simply believe in our project. As
          a backer, you will be signed up to receive product updates via email."
            id={0}
            reward={false}
            title="Pledge with no reward"
          />
          <StandsAccordion
            available={101}
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            id={1}
            pledge="Pledge $25 or more"
            reward={true}
            title="Bamboo Stand"
          />
          <StandsAccordion
            available={64}
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            id={2}
            pledge="Pledge $75 or more"
            reward={true}
            title="Black Edition Stand"
          />
          <StandsAccordion
            available={0}
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            id={3}
            pledge="Pledge $200 or more"
            reward={true}
            title="Mahogany Special Edition"
          />
        </Accordion>
        <Stack spacing={4}>
          {/* <ModalStandItem
            description="Choose to support us without a reward if you simply believe in our project. As
          a backer, you will be signed up to receive product updates via email."
            id={0}
            reward={false}
            title="Pledge with no reward"
          />
          <ModalStandItem
            available={101}
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            id={1}
            pledge="Pledge $25 or more"
            reward={true}
            title="Bamboo Stand"
          />
          <ModalStandItem
            available={64}
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            id={2}
            pledge="Pledge $75 or more"
            reward={true}
            title="Black Edition Stand"
          />
          <ModalStandItem
            available={0}
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            id={3}
            pledge="Pledge $200 or more"
            reward={true}
            title="Mahogany Special Edition"
          /> */}
        </Stack>
      </RadioGroup>
    </>
  );
};

export default ModalStands;
