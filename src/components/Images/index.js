
let pic = 'https://img.alicdn.com/imgextra/i3/1063264201/O1CN011apER51gu6PPa0MBz_!!1063264201.jpg_310x310.jpg';
const Images = props => {
  const { type, text, srcs } = props;
  return <img src={srcs ? srcs : pic} {...props} />;
};

export default Images;
