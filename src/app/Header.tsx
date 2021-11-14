import React from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";

import Logo from "/assets/logo.svg";

const navItems = [
  {id: 0, label: "About"},
  {id: 1, label: "Discover"},
  {id: 2, label: "Get Started"},
];
const NavBar = navItems.map((ni) => (
  <Text key={ni.id} _hover={{cursor: "pointer"}} fontSize="xs" fontWeight="500">
    {ni.label}
  </Text>
));
const Header = (props: any) => {
  return (
    <Stack
      alignSelf="center"
      direction={["row", "row"]}
      height="10vh"
      justifyContent="space-between"
      maxWidth="container.lg"
      paddingTop={[2, 10]}
      spacing={0}
      width="100%"
    >
      <Image alt="logo" height={5} objectFit="contain" src={Logo} />
      <Stack color="white" direction={["row", "row"]} spacing={6}>
        {NavBar}
      </Stack>
    </Stack>
  );
};

export default Header;
