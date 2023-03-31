import { createElement, PropsWithChildren } from 'react';

type Props = Partial<{
  as: string;
  highlight: boolean;
  className: string;
  loading: boolean;
}>;

const Text = ({
  highlight = false,
  as = 'span',
  className = '',
  loading = false,
  children,
}: PropsWithChildren<Props>) => {
  return createElement(as, {
    className: `
    ${highlight ? 'highlight-text' : ''}
    ${loading ? 'animated-bg animated-bg-text' : ''}
    ${className}`,
    children,
  });
};

export default Text;
