import { Avatar } from '@chakra-ui/avatar';
import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { ReactElement } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface IProps {}

const Header: React.FC<IProps> = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const handleToogleTheme = (): void => {
    toggleColorMode();
  };

  return (
    <Box
      className='AppHeader'
      paddingLeft='2'
      paddingRight='2'
      paddingTop='4'
      paddingBottom='4'
    >
      <Flex align='center' justify='space-between' direction='row'>
        <Avatar
          size='md'
          name='Prosper Otemuyiwa'
          src='/images/logo-unkriswina-sumba-512.jpg'
        />
        <Flex direction='column' align='center'>
          <Text fontSize='md' fontWeight='bold'>
            Kelas Unkriswina
          </Text>
          <Text fontSize='sm' fontWeight='medium'>
            Semester / Tahun : I / 2021-2022
          </Text>
        </Flex>
        <Flex align='center' justify='space-between' direction='row'>
          <IconButton
            size='sm'
            fontSize='sm'
            variant='ghost'
            color='current'
            onClick={handleToogleTheme}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
