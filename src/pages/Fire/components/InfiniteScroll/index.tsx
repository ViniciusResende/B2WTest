import React, { useCallback, useEffect, useRef } from 'react';

type InfiniteScrollProps = {
  classReference: string;
  amountLoaded: number;
  loadMoreHandler: () => void;
  children: React.ReactNode;
};

const InfiniteScroll: React.FC<InfiniteScrollProps> = (props: InfiniteScrollProps) => {
  const { classReference, amountLoaded, loadMoreHandler, children } = props;
  const scrollRef = useRef(null);

  const checkElements = useCallback(() => {
    if (scrollRef.current) {
      //@ts-ignore
      const elements = scrollRef.current.getElementsByClassName(classReference);
      if (elements.length) {
        const lastElement = elements[elements.length - 1];
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
  
    return function cleanup() {
      document.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  return (
    <div className="infinite-scroll" ref={scrollRef}>
      {children}
    </div>
  );
}

export default InfiniteScroll;