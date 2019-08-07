import styles from './style.less';
const QuanIcon = props => {
  const { type, text } = props;
  return <p className={styles.quanIcon}><i>{text}元券</i></p>;
};

export default QuanIcon;
