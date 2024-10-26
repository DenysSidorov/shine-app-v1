import React, { FC } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface TransitionWrapperProps {
  children: React.ReactNode;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
  transitionAppearTimeout?: number;
  transitionAppear?: boolean;
  time?: number;
}

const TransitionWrapper: FC<TransitionWrapperProps> = ({
  children,
  transitionEnterTimeout,
  transitionLeaveTimeout,
  transitionAppearTimeout,
  transitionAppear,
  time,
}) => {
  if (!children) {
    return null;
  }

  return (
    <TransitionGroup component="span">
      <CSSTransition
        classNames="todoAppear"
        timeout={{
          enter: transitionEnterTimeout || time || 150,
          exit: transitionLeaveTimeout || time || 150,
          appear: transitionAppearTimeout || time || 150,
        }}
        appear={transitionAppear !== undefined ? transitionAppear : true}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;
