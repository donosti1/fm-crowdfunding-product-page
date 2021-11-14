import React from "react";
import {Button, Image, Radio, RadioGroup, Stack, StackDivider, Text} from "@chakra-ui/react";

interface StandElements {
  id: number;
  title: string;
  reward: boolean;
  available?: number;
  pledge?: string;
  description: string;
}
const ModalStand = (props: any) => {
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
      <Stack
        alignItems="flex-start"
        borderColor="secondary.200"
        borderRadius="xl"
        borderWidth={1}
        padding={6}
      >
        <Radio value={props.id} variant="ghost">
          <Stack direction={["row", "row"]} justifyContent="space-between">
            <Stack direction={["row", "row"]} spacing={8}>
              <Text _hover={{color: "primary.600", cursor: "pointer"}} fontWeight="700">
                {props.title}
              </Text>
              {pledgeLabel}
            </Stack>
            {availableLabel}
          </Stack>
          <Text color="secondary.400">{props.description}</Text>
        </Radio>
      </Stack>
    );
  };

  return (
    <>
      <RadioGroup name="selectedStand">
        <Stack spacing={4}>
          <ModalStandItem
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
          />
        </Stack>
      </RadioGroup>
    </>
  );
};

export default ModalStand;
