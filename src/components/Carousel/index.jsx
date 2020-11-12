import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';
import Image from '../Image';

const Carousel = ({ className, images }) => {
  const classProps = classNames(style['carousel-wrapper'], className);
  // const [slideState, setSlideState] = React.useState(0);
  // const slideLayerRef = React.useRef(null);

  // const onPrev = () => {
  //   if (slideState === 0) return;

  //   setSlideState(slideState - 1);
  // };

  // const onNext = () => {
  //   if (slideState === images.length - 1) return;

  //   setSlideState(slideState + 1);
  // };

  // React.useEffect(() => {
  //   slideLayerRef.current.style.transform = `translate3d(-${
  //     document.body.clientWidth * slideState
  //   }px, 0, 0)`;
  // }, [slideState]);

  return (
    <>
      <div className={classProps}>
        <div className={style['carousel-container']}>
          <div className={style['carousel']}>
            {images.map((image, index) => (
              <div key={index} className={style['image']}>
                <Image width={document.body.clientWidth} src={image.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
