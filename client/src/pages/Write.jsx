import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

export const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill className = 'editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button> Save as a Draft </button>
            <button> Update </button>
          </div>
        </div>
        <div className="item">
          <h1>Catagory</h1>
          <div className="cat">
          <input type="radio" name = "cat" value="recipes" id ="recipes"/>
          <label htmlFor="recipes"> Recipes</label>
          </div>
          <div className="cat">
          <input type="radio" name = "cat" value="food-science" id ="food-science"/>
          <label htmlFor="food-science"> Food science</label>
          </div>
          <div className="cat">
          <input type="radio" name = "cat" value="projects" id ="projects"/>
          <label htmlFor="projects"> Projects</label>
          </div>
          <div className="cat">
          <input type="radio" name = "cat" value="reviews" id ="reviews"/>
          <label htmlFor="reviews"> Reviews</label>
          </div>
          <div className="cat">
          <input type="radio" name = "cat" value="trending" id ="trending"/>
          <label htmlFor="trending"> Trending</label>
          </div>
        </div>
      </div>
    </div>
  );
};
