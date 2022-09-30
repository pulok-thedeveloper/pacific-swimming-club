import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
        <h1>Blogs</h1>
           <div>
                <h3>How Does react Work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
           </div>
           <div>
                <h3>Difference Between Props and State.</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
           </div>
           <div>
                <h3>Uses of UseEffect Hook</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
           </div>
        </div>
    );
};

export default Blogs;