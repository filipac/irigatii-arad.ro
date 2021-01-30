import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const _Link = ({ href, children }) => {
  const router = useRouter();

  let className = children.props ? children.props.className || '' : '';
  if (router.pathname == href) {
    className = `${className} current`;
  }

  return (
    <Link href={href} className={className}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default _Link;
