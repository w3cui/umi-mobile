import router from 'umi/router';
import { QuanIcon, Images } from '../';
import styles from './style.less';
class Goods {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  HorizontalRow(props) {
    return <div className={styles.GoodsRowHor}>
    </div>;
  }

  VerticalRow(props) {
    const { item = [] } = props;
    return item.map((data, key) => <div key={key} className={styles.GoodsRowVer} onClick={() => {
      router.push(`/detailed/${data}`);
    }}>
      <div className={styles.rowItem}>
        <p className={styles.pic}><Images /></p>
        <div className={styles.center}>
          <h3 className={styles.bt}>透真气垫BB霜裸妆遮瑕</h3>
          <div className={styles.desc}>智能E芯片保持高速输出</div>
          <div className={styles.num}>
            <span>天猫价 ¥66.9</span>
            已售 11.8万
          </div>
          <div className={styles.but}>
            <span><i>券后价 ¥</i>49.9</span> <QuanIcon text={35.4} />
          </div>
        </div>
      </div>
    </div>);
  }
}

export default new Goods();
