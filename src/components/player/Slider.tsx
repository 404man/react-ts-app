import * as React from 'react';
import { debounce } from 'lodash';
import 'components/player/Slider.scss';
import offsetLeft from 'utils/DomUtils';

interface ISlider{
  className?: string;
  max: number;
  onChange: (value: number) => void;
  value: number;
}
// type Ithrottle = (dd:number)=> void;

const prevent = (e:any) => {
  e.preventDefault();
  e.stopPropagation();
}

class Slider extends React.Component<ISlider, any>{

  public domNode: HTMLDivElement;
  public throttleOnChange = debounce(this.props.onChange, 100);

  public componentWillUnmout(){
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mousedown', this.onMouseDown);
  }

  public onClick = (e:any) => {
    const {max, onChange} = this.props;
    const percent = (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth;
    onChange(percent * max);
  }

  public onMouseDown = () => {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  public onMouseMove = (e:any) => {
    const {domNode, props} = this;
    const { max, onChange } = props;

    const diff = e.clientX - offsetLeft(domNode);
    // move lenght of domNode Widht percention
    const percent = Math.max(Math.min(diff / domNode.offsetWidth, 1), 0);
    onChange(percent * max);
   }
   public onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
   }

  public render(){
    const {className, max, value} = this.props;
    const width = `${(value / max) * 100}%`;
    return(
      <div 
        className={`slider ${className}`}
        onClick={this.onClick}
        ref={(node:HTMLDivElement) => {this.domNode = node;}}
        role="button"
        tabIndex={0}
      >
        <div className="slider_bar">
          {max > 0 ? (
            <div className="slider_bar_fill" style={{width}}>
              <div
                className="slider_hander"
                onClick={prevent}
                onMouseDown={this.onMouseDown}
                role="button"
                tabIndex={0}
              />
            </div>
          ):null}
        </div>
      </div>
    )
  }
  
}

export default Slider;