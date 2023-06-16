import React from 'react'
import './Category.css';

const Category = () => {
  return (
    <div className='category'>
        <div className="filters">
            <div className="heading">
                <h3>Latest Posts</h3>
                <p><i class="fa-solid fa-filter"></i> Filter By Category</p>
            </div>
            <div className="tabs">
                <button className="btn active">All</button>
                <button className="btn">Artificial Intelligence</button>
                <button className="btn">Cloud Computing</button>
                <button className="btn">DevOps</button>
                <button className="btn">Programming Languages</button>
                <button className="btn">Mobile Application Development</button>
                <button className="btn">Technology and Tools</button> <br/>
                <button className="btn">Get a Job in Tech Company</button>
                <button className="btn">Others</button>
            </div>
        </div>
    </div>
  )
}

export default Category
