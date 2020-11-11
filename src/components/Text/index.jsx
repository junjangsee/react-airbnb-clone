import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

/**
 * 텍스트
 * @param {tag} 텍스트에 사용할 태그
 * @param {className} 클래스명
 * @param {children} 텍스트의 내용
 */
const Text = ({ tag: Tag = 'span', className, children }) => {
  const classProps = classNames(style.text, className);

  return <Tag className={classProps}>{children}</Tag>;
};

export default Text;
