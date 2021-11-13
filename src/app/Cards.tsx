import React from "react";
import {Button, Progress, Stack, StackDivider, Text} from "@chakra-ui/react";
const LastStand = (props: any) => {
  return (
    <Stack
      backgroundColor="transparent"
      borderColor="secondary.200"
      borderRadius="xl"
      borderWidth={1}
      paddingX={[4, 8]}
      paddingY={[6, 6]}
      position="relative"
      spacing={0}
    >
      <Stack direction={["row", "row"]} justifyContent="space-between">
        <Text fontSize="lg" fontWeight="700" marginBottom={6}>
          {props.title}
        </Text>
        <Text color="primary.500" fontSize="md" fontWeight="500" marginBottom={6}>
          {props.pledge}
        </Text>
      </Stack>
      <Text
        as="h2"
        color="secondary.500"
        fontSize={["lg", "sm"]}
        fontWeight="400"
        paddingBottom={[6, 8]}
      >
        {props.description}
      </Text>
      <Stack direction={["row", "row"]} justifyContent="space-between">
        <Stack alignItems="center" direction={["row", "row"]}>
          <Text fontSize="3xl" fontWeight="700">
            {props.available}
          </Text>
          <Text color="secondary.500" fontSize="sm" fontWeight="400">
            left
          </Text>
        </Stack>
        <Button colorScheme="secondary" fontSize="sm" variant="ghost">
          {props.buttonLabel}
        </Button>
      </Stack>
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
    </Stack>
  );
};

const Stand = (props: any) => {
  return (
    <Stack
      borderColor="secondary.200"
      borderRadius="xl"
      borderWidth={1}
      paddingX={[4, 8]}
      paddingY={[6, 6]}
      spacing={0}
    >
      <Stack direction={["row", "row"]} justifyContent="space-between">
        <Text fontSize="lg" fontWeight="700" marginBottom={6}>
          {props.title}
        </Text>
        <Text color="primary.500" fontSize="md" fontWeight="500" marginBottom={6}>
          {props.pledge}
        </Text>
      </Stack>
      <Text
        as="h2"
        color="secondary.500"
        fontSize={["lg", "sm"]}
        fontWeight="400"
        paddingBottom={[6, 8]}
      >
        {props.description}
      </Text>
      <Stack direction={["row", "row"]} justifyContent="space-between">
        <Stack alignItems="center" direction={["row", "row"]}>
          <Text fontSize="3xl" fontWeight="700">
            {props.available}
          </Text>
          <Text color="secondary.500" fontSize="sm" fontWeight="400">
            left
          </Text>
        </Stack>
        <Button colorScheme="primary" fontSize="sm" variant="ghost">
          {props.buttonLabel}
        </Button>
      </Stack>
    </Stack>
  );
};

const fundingStatus = [
  {id: 0, collect: "$89,914", left: "of $100,000 backed"},
  {id: 1, collect: "5,007", left: "total backers"},
  {id: 2, collect: "56", left: "days left"},
];
const fundingCards = fundingStatus.map((fs) => (
  <Stack key={fs.id} flex={1} paddingBottom={6} spacing={0}>
    <Text fontSize="2xl" fontWeight="700">
      {fs.collect}
    </Text>
    <Text color="secondary.500" fontSize={["lg", "md"]} fontWeight="400">
      {fs.left}
    </Text>
  </Stack>
));
const FirstCardContent = () => {
  return (
    <Stack>
      <Stack direction="row" divider={<StackDivider />} spacing={6} width="100%">
        {fundingCards}
      </Stack>
      <Stack>
        <Progress
          backgroundColor="secondary.200"
          borderRadius="lg"
          colorScheme="primary"
          size="md"
          value={82}
          width="100%"
        />
      </Stack>
    </Stack>
  );
};

const LastCardContent = () => {
  return (
    <Stack spacing={0}>
      <Text fontSize="xl" fontWeight="700" marginBottom={6}>
        About this project
      </Text>
      <Text
        as="h2"
        color="secondary.500"
        fontSize={["lg", "md"]}
        fontWeight="400"
        paddingBottom={[6, 8]}
      >
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
        screen to a more comfortable viewing height. Placing your monitor at eye level has the
        potential to improve your posture and make you more comfortable while at work, helping you
        stay focused on the task at hand.
      </Text>
      <Text
        as="h2"
        color="secondary.500"
        fontSize={["lg", "md"]}
        fontWeight="400"
        paddingBottom={6}
      >
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
        your computer to allow notepads, pens, and USB sticks to be stored under the stand.
      </Text>
      <Stack spacing={[4, 6]}>
        <Stand
          available="101"
          buttonLabel="Select Reward"
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          pledge="Pledge $25 or more"
          title="Bamboo Stand"
        />
        <Stand
          available="64"
          buttonLabel="Select Reward"
          description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          pledge="Pledge $75 or more"
          title="Black Edition Stand"
        />
        <LastStand
          available="0"
          buttonLabel="Out of Stock"
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          pledge="Pledge $200 or more"
          title="Mahogany Special Edition"
        />
      </Stack>
    </Stack>
  );
};

const Card = ({componentToPassDown}: {componentToPassDown: any}) => {
  /* const link = `assets/icon-${props.title}.svg`; */

  return (
    <Stack
      backgroundColor="white"
      borderColor="secondary.200"
      borderRadius="xl"
      borderWidth={1}
      paddingX={[4, 8]}
      paddingY={[6, 12]}
    >
      {componentToPassDown}
    </Stack>
  );
};

export {Card, LastCardContent, FirstCardContent};
