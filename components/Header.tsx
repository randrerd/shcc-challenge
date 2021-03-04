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
import { SearchIcon } from '@chakra-ui/icons';
import { Logo } from '@/styles/icons';
import { MdShoppingBasket } from 'react-icons/md';
import { customContainer } from '@/styles/theme';
import { isMobile, isBrowser } from 'react-device-detect';

const Header = () => (
  <Box
    color="gray.600"
    fontFamily="Roboto,-apple-system,Arial,sans-serif"
    fontSize="0.65rem"
  >
    <Flex
      justifyContent="space-between"
      width={customContainer}
      m="0 auto"
      p="0.5em 0"
    >
      <Breadcrumb display="flex" alignItems="stretch" separator="|">
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
      <Text fontStyle="italic">Enjoy free delivery on orders above $50</Text>
      <Breadcrumb display="flex" alignItems="stretch" separator="|">
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
        py="1.5em"
        alignItems="center"
        justifyContent="space-between"
        m="0 auto"
      >
        <Logo width="20%" />
        <Flex alignItems="stretch" width="30%" justifyContent="space-around">
          <Link>WOMEN</Link>
          <Link>MEN</Link>
          <Link>KIDS</Link>
          <Link>LABELS</Link>
          <Link>SALE</Link>
        </Flex>
        <Flex justifyContent="flex-end">
          <Input
            height="1.2rem"
            width="75%"
            fontSize="1rem"
            placeholder="Search"
            variant="outline"
            borderRadius={0}
          />
          <SearchIcon margin="auto 0" ml="0.5em" />
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default Header;
