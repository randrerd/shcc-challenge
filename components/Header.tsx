import {
  Box,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  Link,
  Input,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Logo, LogoSm } from '@/styles/icons';
import { MdShoppingBasket } from 'react-icons/md';
import { customContainer } from '@/styles/theme';
import { useState } from 'react';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(false);

  const onIsNavShowing = () => {
    setIsNavShowing(isNavShowing ? false : true);
  };

  interface INavShowingProps {
    flexDirection?: { base: 'column'; md: 'row' };
    background?: { base: 'white'; md: 'none' };
    left?: { base: string; md: string };
    top?: { base: string; md: string };
    zIndex?: { base: string; md: string };
    fontSize?: { base: string; md: string };
    maxWidth?: { base: string; md: string };
    opacity?: number | { base: number; md: 'initial' };
    visibility?: 'visible' | { base: 'hidden'; md: 'initial' };
  }
  interface ILinkShowingProps {
    color?: { base: string; md: string };
  }
  const navShowingProps: INavShowingProps = {
    ...(isNavShowing
      ? {
          flexDirection: { base: 'column', md: 'row' },
          background: { base: 'white', md: 'none' },
          left: { base: '-2%', md: 'initial' },
          top: { base: '3.75rem', md: 'initial' },
          fontSize: { base: '1rem', md: 'inherit' },
          height: { base: '60vh', md: 'initial' },
          maxWidth: { base: '105%', md: 'auto' },
          padding: '2em',
          opacity: 1,
          visibility: 'visible',
        }
      : {
          maxWidth: { base: '0.2em', md: 'initial' },
          opacity: { base: 0, md: 'initial' },
          height: { base: '60vh', md: 'initial' },
          visibility: { base: 'hidden', md: 'initial' },
          flexDirection: { base: 'column', md: 'row' },
          fontSize: { base: '1rem', md: 'inherit' },
          left: { base: '-12px', md: 'initial' },
          top: { base: '3.75rem', md: 'initial' },
        }),
  };

  const linksShowingProps: ILinkShowingProps = {
    ...(isNavShowing ? {} : { color: { base: '#f4f4f4', md: 'inherit' } }),
  };

  return (
    <Box
      as="header"
      color="gray.600"
      fontFamily="Roboto,-apple-system,Arial,sans-serif"
      fontSize="0.65rem"
    >
      <Flex
        display={{ base: 'none', md: 'flex' }}
        justifyContent="space-between"
        align="center"
        width={customContainer}
        maxWidth="1011px"
        m="0 auto"
        p="0.5em 0"
      >
        <Breadcrumb alignItems="stretch" separator="|">
          <BreadcrumbItem>
            <BreadcrumbLink>UK/GBP</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>STORES</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>CUSTOMER SERVICE</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Text margin={{ base: '0 auto', md: 0 }} fontStyle="italic">
          Enjoy free delivery on orders above $50
        </Text>
        <Breadcrumb
          display={{ base: 'none', md: 'flex' }}
          alignItems="stretch"
          separator="|"
        >
          <BreadcrumbItem>
            <BreadcrumbLink>NEWSLETTER SIGN UP</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>SIGN IN / REGISTER</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem margin="auto 0" display="inline-block">
            <Icon as={MdShoppingBasket} />
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex borderY="solid" borderColor="gray.300">
        <Flex
          width={customContainer}
          maxWidth="1011px"
          py="1em"
          alignItems="center"
          justifyContent="space-between"
          m="0 auto"
          position="relative"
        >
          {!isNavShowing ? (
            <HamburgerIcon
              cursor="pointer"
              onClick={onIsNavShowing}
              fontSize="1.5rem"
              color="secondary"
              display={{ base: 'block', md: 'none' }}
            />
          ) : (
            <CloseIcon
              fontSize="1rem"
              width="1.38em"
              height="1.5em"
              cursor="pointer"
              color="secondary"
              onClick={onIsNavShowing}
            />
          )}

          <LogoSm
            margin="0 auto"
            width="25px"
            height="auto"
            display={{ base: 'block', md: 'none' }}
          />
          <Logo display={{ base: 'none', md: 'block' }} width="20%" />
          <Flex
            alignItems="stretch"
            position={{ base: 'absolute', md: 'relative' }}
            width={{ base: '95vw', md: '30%' }}
            justifyContent="space-around"
            transition="all 0.4s linear"
            zIndex="3"
            {...navShowingProps}
          >
            <Link
              background={{ base: '#f4f4f4', md: 'none' }}
              mb={{ base: '0.3em', md: '0' }}
              padding={{ base: '1.5em 2em', md: '0' }}
              {...linksShowingProps}
            >
              WOMEN
            </Link>
            <Link
              background={{ base: '#f4f4f4', md: 'none' }}
              mb={{ base: '0.3em', md: '0' }}
              padding={{ base: '1.5em 2em', md: '0' }}
              {...linksShowingProps}
            >
              MEN
            </Link>
            <Link
              background={{ base: '#f4f4f4', md: 'none' }}
              mb={{ base: '0.3em', md: '0' }}
              padding={{ base: '1.5em 2em', md: '0' }}
              {...linksShowingProps}
            >
              KIDS
            </Link>
            <Link
              background={{ base: '#f4f4f4', md: 'none' }}
              mb={{ base: '0.3em', md: '0' }}
              padding={{ base: '1.5em 2em', md: '0' }}
              {...linksShowingProps}
            >
              LABELS
            </Link>
            <Link
              background={{ base: '#f4f4f4', md: 'none' }}
              mb={{ base: '0.3em', md: '0' }}
              padding={{ base: '1.5em 2em', md: '0' }}
              {...linksShowingProps}
            >
              SALE
            </Link>
          </Flex>
          <Flex width={{ base: 'auto', md: '23%' }} justifyContent="flex-end">
            <Input
              width="75%"
              fontSize="1rem"
              placeholder="Search"
              variant="outline"
              borderRadius={0}
              display={{ base: 'none', md: 'block' }}
              py="0.5rem"
              height="1.7rem"
            />
            <SearchIcon
              color="secondary"
              width={{ base: '20px', md: '20px' }}
              height="auto"
              margin="auto 0"
              ml="0.5em"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
