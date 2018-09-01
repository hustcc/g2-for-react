# g2-for-react

> 一个简单的 g2 包装，便于在 React 上使用。
>
> A simple react component wrapper for [antv/g2](https://github.com/antvis/g2). Demo click [here](https://git.hust.cc/g2-for-react).

[![npm](https://img.shields.io/npm/v/g2-for-react.svg)](https://www.npmjs.com/package/g2-for-react)
[![npm](https://img.shields.io/npm/dm/g2-for-react.svg)](https://www.npmjs.com/package/g2-for-react)



## Install

> npm i --save g2-for-react



## Usage

```jsx
import GFR from 'g2-for-react';

const creator = chart => {
  chart.tooltip({
    crosshairs: {
      type: 'line'
    }
  });
  chart.axis('temperature', {
    label: {
      formatter: function formatter(val) {
        return val + '°C';
      }
    }
  });
  chart.line().position('month*temperature').color('city');
  chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
    stroke: '#fff',
    lineWidth: 1
  });
};

const onReady = chart => {
  console.log('Ready', chart);
};


ReactDOM.render(
  <GFR
    data={this.state.data}
    creator={creator}
    onReady={onReady}
  />,
  document.getElementById('root'),
);
```

Full demo in `Example`.



## Component Props

 - `className`: class of dom container.
 - `data`: G2 chart data.
 - `creator`: create function for G2 chart.
 - `onReady`: call after rendered.

Other props `padding`, `background`, `plotBackground`, `forceFit`, `animate`, `pixelRatio`, `theme`, `renderer` are the parameters of `G2.Chart`.

Document of g2 [here](https://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_Chart).



## Feature

 - Basically consistent with the original usage.
 - Adaptive width and height.
 - Customization ability.



# License

ISC@[hustcc](https://github.com/hustcc).
