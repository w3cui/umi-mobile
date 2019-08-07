const Icons = props => {
  const { type, className } = props;
  return <i className={`iconfont icon-${type} ${className}`} />;
};
export default Icons;
