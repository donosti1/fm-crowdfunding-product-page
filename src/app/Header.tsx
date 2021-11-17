import React from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";

import Logo from "/assets/logo.svg";
import MenuIcon from "/assets/icon-hamburger.svg";
import CloseIcon from "/assets/icon-close-menu.svg";

const navItems = [
  {id: 0, label: "About"},
  {id: 1, label: "Discover"},
  {id: 2, label: "Get Started"},
];
const NavBar = navItems.map((ni) => (
  <Text
    key={ni.id}
    _hover={{cursor: "pointer"}}
    fontSize={["xl", "sm"]}
    fontWeight="500"
    paddingX={[6, 0]}
    paddingY={[5, 0]}
  >
    {ni.label}
  </Text>
));

const MenuToggle = ({toggle, isOpen}: {toggle: any; isOpen: any}) => {
  return (
    <Stack display={["block", "none"]} onClick={toggle}>
      {isOpen ? (
        <Image alt="menu" height={5} src={CloseIcon} />
      ) : (
        <Image alt="menu" height={5} src={MenuIcon} />
      )}
    </Stack>
  );
};
const Header = (props: any) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  return (
    <>
      <Stack
        alignSelf="center"
        direction={["row", "row"]}
        height="10vh"
        justifyContent="space-between"
        maxWidth="container.lg"
        paddingTop={[8, 10]}
        paddingX={[4, 0]}
        position={["fixed", "relative"]}
        spacing={0}
        top={0}
        width="100%"
        zIndex="100"
      >
        <Image alt="logo" height={5} objectFit="contain" src={Logo} />
        <Stack color="white" direction={["row", "row"]} display={["none", "flex"]} spacing={6}>
          {NavBar}
        </Stack>

        <MenuToggle isOpen={mobileMenuIsOpen} toggle={toggleMobileMenu} />
      </Stack>
      {mobileMenuIsOpen && (
        <Stack
          alignItems="center"
          backgroundColor="blackAlpha.600"
          height="100%"
          position="absolute"
          spacing={0}
          top={0}
          width="100%"
          zIndex="90"
        >
          <Stack
            backgroundColor="#fffbf8"
            borderRadius="xl"
            color="secondary.600"
            divider={<StackDivider role="separator" />}
            overflow={mobileMenuIsOpen ? "hidden" : "unset"}
            position="fixed"
            spacing={0}
            top={20}
            width="90%"
            zIndex="100"
          >
            {NavBar}
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Header;
