function createElement(type, props = {}, ...children) {
  return {
    $$typeof: Symbol("own.element"),
    key: null,
    type,
    props: {
      ...props,
      children,
    },
  };
}

export default createElement;
