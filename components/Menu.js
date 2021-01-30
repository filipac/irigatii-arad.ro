import styled from 'styled-components';
import tw from 'twin.macro';

export const Menu = styled.ul`
  ${tw`flex items-center`}

  li {
    &:first-of-type {
      ${tw`pl-0`}
    }
    ${tw`pl-2 m-2`}
    a {
      &.current,
      &:hover {
        ${tw`text-black bg-green-500 rounded-lg -translate-y-1 scale-110`}
      }
      ${tw`block font-bold tracking-wide text-xs md:text-lg uppercase p-2`}
      ${tw`transition ease-in-out duration-500 transform`}
    }
  }
`;
