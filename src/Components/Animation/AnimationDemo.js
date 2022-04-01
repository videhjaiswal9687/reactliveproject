import React, { Component } from 'react'
//npm install framer-motion
import { motion } from 'framer-motion'

const styleMotion = {
    backgroundColor: 'teal',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25vh',
    width: '50vh',
    margin: 'auto'
}

export default class AnimationDemo extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                {/* <motion.div
                animate={{
                    scale:[1,2,2,1,1],
                    rotate:[0,0,360,360,0]
                }}
                transition={{duration:10}}
                >
                    <h1 style={styleMotion}>AnimationDemo</h1>
                </motion.div> */}
                <motion.div
                    animate={{ rotate: 360, x: 256 }}
                    transition={{ duration: 5 }}
                >
                    <h1 style={{
                        backgroundColor: 'green',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '25vh',
                        width: '50vh',
                        margin: 'auto'
                    }}>AnimationDemo</h1>
                </motion.div>
                <motion.div
                    animate={{ rotate: 360, y:250 }}
                    transition={{ duration: 5 }}
                >
                    <h1 style={{
                        backgroundColor: 'olive',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '25vh',
                        width: '50vh',
                        margin: 'auto'
                    }}>AnimationDemo</h1>
                </motion.div>
                <motion.div
                    animate={{ rotate: 360, y:250 }}
                    transition={{ duration: 5 }}
                >
                    <h1 style={{
                        backgroundColor: 'gray',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '25vh',
                        width: '50vh',
                        margin: 'auto'
                    }}>AnimationDemo</h1>
                </motion.div>
                <motion.div
                    darg="x"
                    dragConstraints={{left:-100,right:100}}
                    animate={{ y:250, x:-850 }}
                    whileHover={{scale:2}}
                    whileTap={{scale:1.1}}
                >
                    <h1 style={{
                        backgroundColor: 'gray',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '25vh',
                        width: '50vh',
                        margin: 'auto'
                    }}>AnimationDemo</h1>
                </motion.div>
            </div>
        )
    }
}
