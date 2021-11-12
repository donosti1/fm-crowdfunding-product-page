import React from "react";
import {Button, Icon, Image, Progress, Stack, StackDivider, Text} from "@chakra-ui/react";
import {ImBookmark} from "react-icons/im";
const App: React.FC = () => {
  const CTAButton = (props: any) => {
    return (
      <Button colorScheme="primary" variant="ghost">
        Back this project
      </Button>
    );
  };
  const BookmarkButton = (props: any) => {
    return (
      <Button
        alignItems="center"
        backgroundColor="secondary.200"
        borderRadius="3xl"
        color="secondary.500"
        height={12}
        paddingLeft={0}
        paddingRight={10}
      >
        <Stack
          alignItems="center"
          backgroundColor="secondary.900"
          borderRadius="50%"
          height={12}
          justifyContent="center"
          marginRight={4}
          width={12}
        >
          <Icon as={ImBookmark} color="secondary.400" height={4} width={4} />
        </Stack>
        <Text>Bookmark</Text>
      </Button>
    );
  };
  const TitleCard = (props: any) => {
    /* const link = `assets/icon-${props.title}.svg`; */

    return (
      <Stack
        alignItems="center"
        backgroundColor="white"
        borderColor="secondary.200"
        borderRadius="xl"
        borderWidth={1}
        justifyContent="center"
        paddingBottom={[6, 10]}
        paddingX={[4, 8]}
        spacing={0}
      >
        <Image
          alt="logo mastercraft"
          position="relative"
          src="/assets/logo-mastercraft.svg"
          top="-28px"
        />
        <Text as="h1" fontSize="2xl" fontWeight="700" paddingBottom={2}>
          Mastercraft Bamboo Monitor Riser
        </Text>
        <Text
          as="h2"
          color="secondary.500"
          fontSize={["lg", "md"]}
          fontWeight="400"
          paddingBottom={6}
        >
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </Text>
        <Stack alignItems="center" direction="row" justifyContent="space-between" width="100%">
          <CTAButton />
          <BookmarkButton />
        </Stack>
      </Stack>
    );
  };
  const LastStand = (props: any) => {
    /* const link = `assets/icon-${props.title}.svg`; */

    return (
      <Stack
        alignItems="center"
        backgroundColor="transparent"
        borderRadius="md"
        justifyContent="center"
        paddingBottom={[6, 6]}
        paddingTop={[10, 10]}
        paddingX={[4, 4]}
        position="relative"
        top={-16}
      >
        <Text as="h1" fontSize="2xl" fontWeight="700">
          Mastercraft Bamboo Monitor Riser
        </Text>
        <Stack
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(137,255,241,0) 100%)",
            filter:
              "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0089fff1', endColorstr='#000000',GradientType=0)",
          }}
        />
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

  return (
    <Stack backgroundColor="secondary.100" minHeight="100vh">
      <Stack
        backgroundColor="primary.800"
        backgroundImage={[
          "url('/assets/image-hero-mobile.jpg')",
          "url('/assets/image-hero-desktop.jpg')",
        ]}
        backgroundPosition={["50%  0%", "50%  0%"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["cover", "contain"]}
        justifyContent="center"
        role="main"
        width="100%"
      >
        <Stack
          alignSelf="center"
          paddingTop="40vh"
          paddingX={[8, 0]}
          spacing={4}
          width={["100%", "container.md"]}
        >
          <TitleCard />
          <Card componentToPassDown={<FirstCardContent />} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
