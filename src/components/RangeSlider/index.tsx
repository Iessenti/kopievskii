import { useState } from 'react'
// import './range.sass'
import './range.sass';
import 'rc-tooltip/assets/bootstrap.css';
import Slider, { createSliderWithTooltip, SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
const style = { width: 234, margin: 0 }
const SliderWithTooltip = createSliderWithTooltip(Slider);
function log(value:number) {
    console.log(value); //eslint-disable-line
}

  function percentFormatter(v:number) {
    return `${v}`;
  }

  const { Handle } = Slider;
  const handle = (props: any) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={true}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

export const RangeSlider = () => {
    const [value, setValue] = useState<number>(0)


    return (
        <div style={style}>
        
        <SliderWithTooltip
            tipFormatter={percentFormatter}
            onChange={log}
            step={0.5}
            tipProps={{prefixCls: 'sd'}}
            railStyle={{ backgroundColor: '#E6E8EC', height: 8, borderRadius: '90px' }}
            trackStyle={{ backgroundColor: '#F9738B', height: 8, borderRadius: '90px' }}
            handleStyle={{
                height: 24,
                width: 24,
                background: 'linear-gradient(90deg, #F96D8C 0%, #FBD862 100%)',
                border: '4px solid #FCFCFD',
                boxSizing: 'border-box',
                boxShadow: '0px 8px 16px -8px rgba(15, 15, 15, 0.2)',
                borderRadius: '24px',
                marginTop: -8

              }}
              handle={handle}
              min={0.5} 
              max={30000}
        />
        
        </div>
    )
}