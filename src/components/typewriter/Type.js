import React from 'react'
import Typewriter from 'typewriter-effect';
// import "./typical.css"


export default function Type() {
    return (
        <div>
                   
             
                <span  style={{ color: "#c0c0cd", fontWeight: 'bold', fontSize:"30px" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        options={{
                            strings: ['full stack web developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            
        </div>
    )
}
