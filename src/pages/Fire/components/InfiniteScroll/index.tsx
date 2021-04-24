import React, { useCallback, useEffect, useRef } from 'react';
import { isNullishCoalesce } from 'typescript';

type InfiniteScrollProps = {
  classReference: string;
  amountLoaded: number;
  loadMoreHandler: () => void;
  children: React.ReactNode;
};

const InfiniteScroll: React.FC<InfiniteScrollProps> = (props: InfiniteScrollProps) => {
  const { classReference, amountLoaded, loadMoreHandler, children } = props;
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkElements = useCallback(() => {
    if(scrollRef.current){
        const elements = scrollRef.current?.getElementsByClassName(classReference);
        if (elements.length) {
          const lastElement = elements[elements.length - 1];
          //@ts-ignore
          const lastElementBottom = lastElement.offsetTop + lastElement.offsetHeight;
          if ((window.innerHeight + window.scrollY) > lastElementBottom - 200) {
            loadMoreHandler();
          }
        } else {
          loadMoreHandler();
        }
      }
  }, [loadMoreHandler, classReference]);

  const onScroll = useCallback(() => {
    checkElements();
  },[checkElements]);
  
  useEffect(() => {
    checkElements();
  }, [amountLoaded, scrollRef, classReference, checkElements]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    document.addEventListener('resize', onScroll);
    //TODO: fix that when resizing the website doesnt load more pokemons
  
    return function cleanup() {
      document.removeEventListener('scroll', onScroll);
      document.removeEventListener('resize', onScroll);
    }
  }, [onScroll]);

  return (
    <div 
      className="infinite-scroll" 
      ref={scrollRef}
      style={{ width: '100%' }}
      >
      {children}
    </div>
  );
}

export default InfiniteScroll;