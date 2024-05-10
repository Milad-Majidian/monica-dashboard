import { useEffect } from "react";
import "./style.css";
// import "./script.js";

import React, { use, useState } from "react";

function SelectBox() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "/path/to/script.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  useEffect(() => {
    console.log("useEffect");
    const selected = document.querySelector(".selected");
    const optionsContainer: any = document.querySelector(".options-container");
    const searchBox: any = document.querySelector(".search-box input");
    const optionsList: any = document.querySelectorAll(".option");
    // try {
    if (selected) {
      selected.addEventListener("click", (e) => {
        console.log("click", e.target);
        optionsContainer.classList.toggle("active");

        // if (optionsContainer.classList.contains("active")) {
        //   optionsContainer.classList.remove("active");
        // } else {
        //   optionsContainer.classList.add("active");
        // }
        // let activeOptions = document.querySelectorAll(".option.active");
        // for (let i = 0; i < activeOptions.length; i++) {
        //   activeOptions[i].classList.remove("active");
        // }

        searchBox.value = "";
        filterList("");
        if (optionsContainer.classList.contains("active")) {
          searchBox.focus();
        }
      });
      optionsList.forEach((o: any) => {
        o.addEventListener("click", () => {
          selected.innerHTML = o.querySelector("label").innerHTML;
          optionsContainer.classList.remove("active");
        });
      });
      searchBox.addEventListener("keyup", function (e: any) {
        filterList(e.target.value);
      });
      const filterList = (searchTerm: any) => {
        searchTerm = searchTerm.toLowerCase();
        optionsList.forEach((option: any) => {
          let label =
            option.firstElementChild.nextElementSibling.innerText.toLowerCase();
          if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
          } else {
            option.style.display = "none";
          }
        });
      };
    }
    // } catch (e) {
    //   console.log(e);
    // }
  });

  return (
    <>
      <div className="select-box">
        <div className="options-container">
          <div className="option">
            <input
              type="radio"
              className="radio"
              id="automobiles"
              name="category"
            />
            <label htmlFor="automobiles">Automobiles</label>
          </div>

          <div className="option">
            <input type="radio" className="radio" id="film" name="category" />
            <label htmlFor="film">Film & Animation</label>
          </div>

          <div className="option">
            <input
              type="radio"
              className="radio"
              id="science"
              name="category"
            />
            <label htmlFor="science">Science & Technology</label>
          </div>

          <div className="option">
            <input type="radio" className="radio" id="art" name="category" />
            <label htmlFor="art">Art</label>
          </div>

          <div className="option">
            <input type="radio" className="radio" id="music" name="category" />
            <label htmlFor="music">Music</label>
          </div>

          <div className="option">
            <input type="radio" className="radio" id="travel" name="category" />
            <label htmlFor="travel">Travel & Events</label>
          </div>

          <div className="option">
            <input type="radio" className="radio" id="sports" name="category" />
            <label htmlFor="sports">Sports</label>
          </div>

          <div className="option">
            <input type="radio" className="radio" id="news" name="category" />
            <label htmlFor="news">News & Politics</label>
          </div>

          <div className="option">
            <input
              type="radio"
              className="radio"
              id="tutorials"
              name="category"
            />
            <label htmlFor="tutorials">Tutorials</label>
          </div>
        </div>

        <div className="selected">Select Video Category</div>

        <div className="search-box">
          <input type="text" placeholder="Start Typing..." />
        </div>
      </div>
    </>
  );
}

export default SelectBox;
