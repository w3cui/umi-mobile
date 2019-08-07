// 初始化 全站基础数据
import { getModelInfo } from '@/services';
import { Toast, Icon } from 'antd-mobile';
import bodyBg from '../assets/home/bg.png';

export default {
  namespace: 'modelInfo',
  state: {
    info: {
      bodyImage: bodyBg,
      bodyColor: '#D20E35',
      mainColor: '#D20E35',
    },
    hreader: {
      is_show: true,//是否显示头部
      is_background: false,//是否显示背景      
      children: <div>hao123商城</div>,//标题
      position: 'fixed',//定位方式
      nav_bar: {
        mode: 'dark',//'dark' enum{'dark', 'light'}
        icon: <Icon type="left" />,
      }
    },
  },
  effects: {
    *editHreader({ payload }, { call, put }) {
      yield put({
        type: 'show',
        payload: {
          hreader: payload,
        },
      });
    },
    *getModelInfo({ payload }, { call, put }) {
      const response = yield call(getModelInfo, payload);
      yield put({
        type: 'show',
        payload: {
          modelInfo: {},
        },
      });
    },
  },
  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
