import * as React from 'react';
import './Loader.scss';

interface ILoader{
  children?: any;
  className?: string;
  isLoading: boolean;
}

const Loader = ({children=null, className='', isLoading}:ILoader) => {
  if(isLoading){
    return (
      <div className={`loader ${className}`}>
        <div className="loader_rects">
          <div className="loader_rect loader_rect-1" />
          <div className="loader_rect loader_rect-2" />
          <div className="loader_rect loader_rect-3" />
          <div className="loader_rect loader_rect-4" />
          <div className="loader_rect loader_rect-5" />
        </div>
      </div>
    )
  }
  return children;
}

export default Loader;