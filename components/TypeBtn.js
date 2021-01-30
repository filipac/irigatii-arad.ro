import styled from 'styled-components';
import tw from 'twin.macro';

export const TypeBtn = styled.div`
  ${tw`cursor-pointer py-4 border-transparent flex items-center text-gray-500`}
  transition: 200ms;
  ${(props) => props.active && tw`border-b-2 border-green-600 text-green-600`}

  .undraw_male_avatar_323b_svg__fill-current {
    ${tw`fill-current`}
    transition: 200ms;
  }
`;
