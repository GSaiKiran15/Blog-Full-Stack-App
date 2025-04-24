import React from "react";

export default function Trending(){
    return (
        // You need to add a for loop to show top 5 from database.
        <div className="trendingBlog"> 
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="../assets/hanuman.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">You need to add a for loop to show top 5 from database.</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <span className="publisherName">Publisher Name</span>
                <br/>
                <span>27</span>
              </div>
            </div>
          </div>
    </div>
    )
}