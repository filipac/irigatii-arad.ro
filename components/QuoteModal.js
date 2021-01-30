import { useModalState } from 'state/contactModal';
import styled from 'styled-components';
import classNames from 'classnames';
import tw from 'twin.macro';
import { Quote } from './Quote';

export const Input = styled.input`
  ${tw`border border-gray-300 px-2 py-4 w-full rounded-xl`}
`;

export const QuoteModalRoot = styled.div`
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const QuoteModal = () => {
  const { state: show, hide: close } = useModalState();
  return (
    <QuoteModalRoot>
      <div
        className={classNames(
          'main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated faster',
          { 'hidden fadeOut': !show },
          { fadeIn: show }
        )}
        style={{ background: 'rgba(0,0,0,.7)' }}
      >
        <div className=" modal-container bg-transparent w-11/12 md:max-w-xl mx-auto rounded  z-50 overflow-y-auto">
          <div className="modal-content py-1 text-left px-6">
            {/* <!--Title--> */}
            <div className="flex justify-between items-center pb-1">
              <p className="text-2xl font-bold">&nbsp;</p>
              <div
                className="modal-close cursor-pointer z-50"
                onClick={(e) => {
                  close();
                }}
              >
                <svg
                  className="fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            {/* <!--Body--> */}
            <div className="mt-2">
              <Quote slim />
            </div>
          </div>
        </div>
      </div>
    </QuoteModalRoot>
  );
};
