import React from "react";
import {
  Button,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {ImBookmark} from "react-icons/im";

import Header from "./Header";
import {Card, LastCardContent, FirstCardContent} from "./Cards";
import ModalStands from "./ModalStands";

const App: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [showMessage, setShowMessage] = React.useState<boolean>(false);
  const CTAButton = (props: any) => {
    return (
      <Button colorScheme="primary" variant="ghost" onClick={onOpen}>
        Back this project
      </Button>
    );
  };
  const BookmarkButton = (props: any) => {
    const [isBookmarked, setIsBookmarked] = React.useState<boolean>(false);

    return (
      <Button
        _hover={{backgroundColor: "secondary.200"}}
        alignItems="center"
        backgroundColor="secondary.200"
        borderRadius="3xl"
        color={isBookmarked ? "primary.600" : "secondary.500"}
        height={12}
        paddingLeft={0}
        paddingRight={6}
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <Stack
          alignItems="center"
          backgroundColor={isBookmarked ? "primary.600" : "secondary.900"}
          borderRadius="50%"
          height={12}
          justifyContent="center"
          marginRight={4}
          width={12}
        >
          <Icon
            as={ImBookmark}
            color={isBookmarked ? "white" : "secondary.400"}
            height={4}
            width={4}
          />
        </Stack>
        <Text>Bookmark</Text>
      </Button>
    );
  };

  const TitleCard = (props: any) => {
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
          fontSize={["lg", "sm"]}
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

  return (
    <>
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
          <Header />
          <Stack
            alignSelf="center"
            paddingBottom="15vh"
            paddingTop="32vh"
            paddingX={[8, 0]}
            spacing={4}
            width={["100%", "container.md"]}
          >
            <TitleCard />
            <Card componentToPassDown={<FirstCardContent />} />
            <Card componentToPassDown={<LastCardContent onClick={onOpen} />} />
          </Stack>
        </Stack>
      </Stack>
      <Modal
        isCentered={showMessage}
        isOpen={isOpen}
        size={showMessage ? "lg" : "3xl"}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent paddingBottom={showMessage ? 6 : 0}>
          <ModalHeader />
          {!showMessage && <ModalCloseButton />}
          <ModalBody>
            {showMessage && (
              <Stack alignItems="center">
                <Image alt="icon-check" src="/assets/icon-check.svg" />
                <Text as="h3" fontSize="xl" fontWeight="700">
                  Thanks for your support!
                </Text>
                <Text color="secondary.500" paddingY={6}>
                  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser
                  worldwide. You will get an email once our campaign is completed.
                </Text>
                <Button alignSelf="center" colorScheme="primary" variant="ghost" onClick={onClose}>
                  Got it
                </Button>
              </Stack>
            )}
            {!showMessage && (
              <>
                <Text as="h2" fontSize="2xl" fontWeight="700" paddingBottom={2}>
                  Back this project
                </Text>
                <Text
                  as="h3"
                  color="secondary.500"
                  fontSize={["lg", "md"]}
                  fontWeight="400"
                  paddingBottom={6}
                >
                  Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </Text>
                <ModalStands handleModalButton={() => setShowMessage(true)} />
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default App;
