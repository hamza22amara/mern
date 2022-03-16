import React from 'react'


export default function DefaultLayout(props) {
  return (
    <div>
          <div className="Header bs1">
               <div className="d-flex justify-content-between">
                    <h1> Dar EL Bay </h1>
                    <button> User </button>
                </div>
            </div>
            <div className="content">
            {props.children}
            </div>
    </div>
  )
}
