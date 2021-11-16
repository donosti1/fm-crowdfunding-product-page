import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      500: "hsl(176, 50%, 47%)",
      600: "hsl(176, 72%, 28%)",
    },
    secondary: {
      100: "#fafafa",
      200: "hsl(0, 0%, 96%)",
      400: "#b1b1b1",
      500: "hsl(0, 0%, 48%)",
      900: "#2f2f2f",
    },
  },
  sizes: {
    container: {
      md: "660px",
      xl: "1440px",
    },
  },
  fonts: {
    body: "Commissioner",
    heading: "Commissioner",
  },
  components: {
    Link: {
      variants: {
        unstyled: ({colorScheme = "blackAlpha"}) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
        color: ({colorScheme = "secondary"}) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Radio: {
      sizes: {
        xl: {
          control: {w: {base: 6, lg: 5}, h: {base: 6, lg: 5}},
          label: {fontSize: "lg"},
        },
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        ghost: ({colorScheme = "primary"}) => ({
          backgroundColor: `${colorScheme}.500`,
          borderRadius: {base: "full", lg: "3xl"},
          height: {base: 14, lg: 12},
          paddingX: {base: 8, lg: 6},
          color: "white",
          ":hover, :focus": {
            backgroundColor: `${colorScheme}.600`,
            color: "white",
          },
        }),
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
      },
    },
  },
});
