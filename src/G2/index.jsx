import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntvG2 from '@antv/g2';
import isEqual from 'fast-deep-equal';
import { bind, clear } from 'size-sensor';

import { BGType } from './const';

export default class G2 extends Component{
  constructor(props) {
    super(props);

    this.dom = undefined;
    this.g2 = undefined;
  }

  componentDidMount() {
    const { className, creator, onReady, data, ...cfg } = this.props;

    this.g2 = new AntvG2.Chart({
      container: this.dom,
      data,
      height: this.dom.clientHeight,
      ...cfg,
    });

    // 创建过程
    creator(this.g2);

    this.g2.render();

    bind(this.dom, ele => {
      this.g2.changeHeight(ele.clientHeight);
    });

    // 成功回调
    onReady(this.g2);
  }

  componentDidUpdate(prevProps, prevState) {
    // 数据变更
    if (!isEqual(prevProps.data, this.props.data)) {
      this.g2.changeData(this.props.data);
    }
  }

  componentWillUnmount() {
    clear(this.dom);

    this.g2.destroy();
  }

  render() {
    const { className } = this.props;
    return (
      <div
        className={`g2-for-react ${className || ''}`}
        style={{ height: '100%', overflow: 'hidden' }}
        ref={e => { this.dom = e; }}
      />
    )
  }
}

G2.propTypes = {
  className: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.object,
  ]).isRequired,
  creator: PropTypes.func,
  onReady: PropTypes.func,
  padding: PropTypes.any,
  background: BGType,
  plotBackground: BGType,
  forceFit: PropTypes.bool,
  animate: PropTypes.bool,
  pixelRatio: PropTypes.number,
  theme: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.object,
  ]),
  renderer: PropTypes.string,
};

G2.defaultProps = {
  onReady: () => {},
  creator: () => {},
  padding: undefined,
  background: undefined,
  plotBackground: undefined,
  forceFit: true,
  animate: true,
  pixelRatio: undefined,
  theme: undefined,
  renderer: undefined,
};
