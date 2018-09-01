import PropTypes from 'prop-types';

export const BGType = PropTypes.shape({
  fill: PropTypes.string, // 图表背景色
  fillOpacity: PropTypes.number, // 图表背景透明度
  stroke: PropTypes.string, // 图表边框颜色
  strokeOpacity: PropTypes.number, // 图表边框透明度
  opacity: PropTypes.number, // 图表整体透明度
  lineWidth: PropTypes.number, // 图表边框粗度
  radius: PropTypes.number // 图表圆角大小
});
