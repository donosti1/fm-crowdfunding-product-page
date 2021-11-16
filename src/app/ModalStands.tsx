import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

interface StandElements {
  id: number;
  title: string;
  reward: boolean;
  available?: number;
  pledge?: string;
  description: string;
  isExpanded: boolean;
}
const ModalStands = ({handleModalButton}: {handleModalButton: () => void}) => {
  const [selectedAccordion, setSelectedAccordion] = React.useState<"" | number>("");
  const ModalStandItem = (props: StandElements) => {
    const pledgeLabel = props.reward ? (
      <Text color="primary.500" fontWeight="700">
        Pledge ${props.pledge} or more
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
    const disableStand =
      props.available == 0 ? (
        <Stack
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom,  rgba(255,255,255,.6) 1%, rgba(255,255,255,.6) 5%)",
            filter:
              "progid:DXImageTransform.Microsoft.gradient( startColorstr='transparent', endColorstr='transparent',GradientType=0)",
          }}
        />
      ) : null;

    return (
      <Stack backgroundColor="transparent" position="relative">
        <Stack alignItems="flex-start" direction="row">
          <Radio colorScheme="primary" paddingTop={1} size="lg" value={props.id} />
          <Stack>
            <Stack
              alignItems="center"
              direction={["row", "row"]}
              justifyContent="space-between"
              pointerEvents="none"
            >
              <Stack alignItems="center" direction={["row", "row"]} spacing={8}>
                <Text _hover={{color: "primary.600", cursor: "pointer"}} fontWeight="700">
                  {props.title}
                </Text>
                {pledgeLabel}
              </Stack>
              {availableLabel}
            </Stack>
            <Text color="secondary.500" textAlign="left">
              {props.description}
            </Text>
          </Stack>
        </Stack>
        {disableStand}
      </Stack>
    );
  };
  const StandsAccordion = (props: any) => (
    <AccordionItem borderY={0} isDisabled={props.available == 0} marginBottom={4}>
      {({isExpanded}) => (
        <Stack
          alignItems="flex-start"
          borderColor={isExpanded ? "primary.500" : "secondary.200"}
          borderRadius="xl"
          borderWidth={isExpanded ? 2 : 1}
          paddingTop={2}
        >
          <h2>
            <AccordionButton _focus={{outline: "none"}} _hover={{backgroundColor: "transparent"}}>
              <ModalStandItem
                available={props.available}
                description={props.description}
                id={props.id}
                isExpanded={isExpanded}
                pledge={props.pledge}
                reward={props.reward}
                title={props.title}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel borderTopWidth={1}>
            {props.reward && (
              <Stack alignItems="center" direction="row" justifyContent="space-between">
                <Text color="secondary.500">Enter your pledge</Text>
                <Stack alignItems="center" direction="row">
                  <InputGroup width={24}>
                    <InputLeftElement color="secondary.500" fontSize="lg" pointerEvents="none">
                      $
                    </InputLeftElement>
                    <Input
                      _focus={{borderColor: "primary.500", cursor: "pointer"}}
                      _hover={{borderColor: "primary.500", cursor: "pointer"}}
                      borderRadius="3xl"
                      fontWeight="700"
                      placeholder={props.pledge}
                      type="number"
                    />
                  </InputGroup>
                  <Button colorScheme="primary" variant="ghost" onClick={() => handleModalButton()}>
                    Continue
                  </Button>
                </Stack>
              </Stack>
            )}
            {!props.reward && (
              <Stack alignItems="center" direction="row" justifyContent="flex-end">
                <Button
                  alignSelf="flex-end"
                  colorScheme="primary"
                  variant="ghost"
                  onClick={() => handleModalButton()}
                >
                  Continue
                </Button>
              </Stack>
            )}
          </AccordionPanel>
        </Stack>
      )}
    </AccordionItem>
  );
  const stands = [
    {
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      id: 0,
      reward: false,
      title: "Pledge with no reward",
    },
    {
      available: 101,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      id: 1,
      pledge: 25,
      reward: true,
      title: "Bamboo Stand",
    },
    {
      available: 64,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      id: 2,
      pledge: 75,
      reward: true,
      title: "Black Edition Stand",
    },
    {
      available: 0,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      id: 3,
      pledge: 200,
      reward: true,
      title: "Mahogany Special Edition",
    },
  ];
  const standsItems = stands.map((st) => {
    return (
      <StandsAccordion
        key={st.id}
        available={st.available}
        description={st.description}
        id={st.id}
        pledge={st.pledge}
        reward={st.reward}
        title={st.title}
      />
    );
  });

  return (
    <>
      <Accordion
        allowToggle
        className="modalAccordion"
        onChange={(val) => setSelectedAccordion(Number(val))}
      >
        <RadioGroup name="standsRad" value={selectedAccordion}>
          {standsItems}
        </RadioGroup>
      </Accordion>
    </>
  );
};

export default ModalStands;
