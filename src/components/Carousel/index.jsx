import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';
import Image from '../Image';
import Text from '../Text';
import Button from '../Button';

const Carousel = ({ className, images }) => {
  const classProps = classNames(style['carousel-wrapper'], className);
  const [slideState, setSlideState] = React.useState(0);
  const slideLayerRef = React.useRef(null);

  const onPrev = () => {
    if (slideState === 0) return;

    setSlideState(slideState - 1);
  };

  const onNext = () => {
    if (slideState === images.length - 1) return;

    setSlideState(slideState + 1);
  };

  React.useEffect(() => {
    slideLayerRef.current.style.transform = `translate3d(-${
      document.body.clientWidth * slideState
    }px, 0, 0)`;
  }, [slideState]);

  return (
    <>
      <div className={classProps}>
        <div ref={slideLayerRef} className={style['carousel']}>
          {images.map((image, index) => (
            <Image
              width={document.body.clientWidth}
              key={index}
              src={image.src}
            />
          ))}
        </div>
        <Button className={style['prev-btn']} onClick={onPrev}>
          <Text tag='span'>이전</Text>
        </Button>
        <Button className={style['next-btn']} onClick={onNext}>
          <Text tag='span'>이후</Text>
        </Button>
      </div>
    </>
  );
};

export default Carousel;
