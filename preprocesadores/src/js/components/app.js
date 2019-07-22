import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi-bd.webp';
import video from '../../videos/SampleVideo.mp4';

import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';


console.log(data)

function App() {
    const [loaderList, setLoaderList] = useState([]) // this is a Hook
    function handleClick() {
        setLoaderList(data.loaders)
    }
    return ( < div >
        <
        p className = "sass" > This is sass < /p>

        <
        p className = "less" > This is less < /p>

        <
        p className = "stylus" > This is stylus < /p>

        <
        p className = "post-css" > This is postCss < /p>

        Hello World: This is an awesome example with React <
        video src = { video }
        width = { 360 }
        controls poster = { logo } > < /video> <
        p > < img src = { logo }
        /></p >
        <
        ul > {
            loaderList.map((item) => < Loader {...item }
                key = { item.id }
                />)
            } <
            /ul>   <
            button onClick = { handleClick } > Show what you have learn so far < /button>  < /
            div > )
    }

    export default App