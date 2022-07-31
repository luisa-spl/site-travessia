import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import type { IconButtonProps } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';

export interface ChevronProps extends IconButtonProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  colors?: {
    default: string;
    hover: string;
  };
}

const transform = {
  left: 'rotate(180deg)',
  right: 'rotate(0deg)',
  top: 'rotate(270deg)',
  bottom: 'rotate(90deg)',
};

export function Chevron({
  direction,
  colors = { default: 'blue', hover: 'black' },
  ...props
}: ChevronProps) {
  return (
    <IconButton
      icon={<Arrow />}
      w="max-content"
      h="14px"
      bg="transparent"
      sx={{ transform: transform[direction], svg: { stroke: colors.default } }}
      _disabled={{
        svg: { stroke: 'neutral.gray.medium', cursor: 'not-allowed', '&:hover': { stroke: 'neutral.gray.medium' } },
      }}
      _hover={{ bg: 'transparent', svg: { stroke: colors.hover } }}
      _focus={{ borderColor: 'transparent' }}
      _focusVisible={{ outlineColor: 'brand.primary.pure' }}
      _active={{ bg: 'transparent' }}
      size="xs"
      {...props}
    />
  );
}