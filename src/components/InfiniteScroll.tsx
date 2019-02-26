import * as React from 'react';

interface IInfiniteScroll{
  args: any[];
  className?: string;
  children: any;
  onScroll: any;
}

export class InfiniteScroll extends React.Component<IInfiniteScroll>{

  public componentDidMount(){
    window.addEventListener('scroll', this.onScroll, false);
  }

  public componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll, false);
  }

  public onScroll = () => {
    if(document.body.offsetHeight - (window.innerHeight + window.scrollY) <= 200){
      const {args, onScroll} = this.props;
      onScroll(...args);
    }
  }

  public render(){
    const {children, className} = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}