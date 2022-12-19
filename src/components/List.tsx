import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode
  // any props that come into the component
}
export default function List({ children }:Props) {
  
    return (
      <ul className="divide-y divide-slate-100">
        {children}
      </ul>
    )
  }