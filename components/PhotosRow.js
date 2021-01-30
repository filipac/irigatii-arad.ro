import tw from 'twin.macro';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

const HasDivider = styled.div`
  .custom-shape-divider-bottom-1611981857 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-bottom-1611981857 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 70px;
  }

  .custom-shape-divider-bottom-1611981857 .shape-fill {
    fill: #f4f4f4;
  }
  .custom-shape-divider-top-1611982054 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1611982054 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 70px;
  }

  .custom-shape-divider-top-1611982054 .shape-fill {
    fill: #f4f4f4;
  }
`;

const PhotosRow = () => {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <HasDivider tw="relative">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter={5}>
              <img tw="cursor-pointer" width="100%" src="/assets/img/p1.jpg" />
              <img tw="cursor-pointer" width="100%" src="/assets/img/p10.jpg" />
              <img tw="cursor-pointer" width="100%" src="/assets/img/p9.jpg" />
              <img tw="cursor-pointer" width="100%" src="/assets/img/p3.jpg" />
              <img tw="cursor-pointer" width="100%" src="/assets/img/p5.jpg" />
              <img tw="cursor-pointer" width="100%" src="/assets/img/p12.jpg" />
              <img tw="cursor-pointer" width="100%" src="/assets/img/p6.jpg" />
              <img tw="cursor-pointer" width="100%" src="/assets/img/p13.jpg" />
            </Masonry>
          </ResponsiveMasonry>
          {/* <div class="custom-shape-divider-bottom-1611981857">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div class="custom-shape-divider-top-1611982054">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
        </HasDivider>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};
export default PhotosRow;
