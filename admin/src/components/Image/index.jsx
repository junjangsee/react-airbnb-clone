import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

/**
 * 이미지
 * @param {src} 소스
 * @param {alt} 설명
 * @param {width} 넓이
 * @param {height} 높이
 * @param {className} 클래스명
 */
const Image = ({ src, alt, width, height, className }) => {
  const classProps = classNames(style.image, className);

  return (
    <img
      className={classProps}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
