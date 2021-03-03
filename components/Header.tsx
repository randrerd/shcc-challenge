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
import { CopyIcon, SearchIcon } from '@chakra-ui/icons';
import { Logo } from '@/styles/icons';
import { MdShoppingBasket } from 'react-icons/md';

const Header = () => (
  <Box
    color="gray.600"
    fontFamily="Roboto,-apple-system,Arial,sans-serif"
    fontSize="0.9rem"
  >
    <Flex justifyContent="space-between" width="80%" m="0 auto" p="0.5em 0">
      <Breadcrumb display="flex" alignItems="stretch" separator="|">
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xs">UK/GBP</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xs">STORES</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xs">CUSTOMER SERVICE</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text fontStyle="italic">Enjoy free delivery on orders above $50</Text>
      <Breadcrumb display="flex" alignItems="stretch" separator="|">
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xs">NEWSLETTER SIGN UP</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="xs">SIGN IN / REGISTER</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem margin="auto 0" display="inline-block">
          <Icon as={MdShoppingBasket} />
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
    <Flex borderY="solid" borderColor="gray.300">
      <Flex
        width="80%"
        py="1em"
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
        <Flex>
          <Input
            height="8"
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
