import { useEffect, useId, useLayoutEffect } from "react";
import "./style.css";

import React, { use, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function SelectBox({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (value: string) => void;
}) {
  useEffect(() => {
    const searchBox: any = document.querySelector(".search-box input");
    const optionsList: any = document.querySelectorAll(".option");

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
    window.addEventListener("click", function (e: any) {
      console.log(document.querySelector(".select-box")?.contains(e.target));

      if (!document.querySelector(".select-box")?.contains(e.target)) {
        setActive(false);
      }
    });
  });

  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="select-box">
        <div className={`options-container ${active ? "active" : ""}`}>
          {options.map((option: string, index: number) => {
            const randomId = useId();
            return (
              <div
                onClick={() => {
                  setSelected(index);
                  onSelect(option);
                  setActive(false);
                  setSearch("");
                  const options = document.querySelectorAll(".option");
                  options.forEach((option: any) => {
                    option.style.display = "block";
                  });
                }}
                className={`option ${
                  index === selected ? "bg-primaryLight" : ""
                } rounded-[8px]`}
                key={index}
              >
                <input
                  type="radio"
                  className={`radio`}
                  id={randomId}
                  name="category"
                />
                <div className="flex justify-between items-center">
                  <label htmlFor={randomId}>{option}</label>
                  {index === selected && <IoMdCheckmark size={20} />}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="selected"
          onClick={() => {
            setActive(!active);
            setSearch("");
          }}
        >
          {selected ? options[selected] : options[0]}
        </div>

        <div className="search-box relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            value={search}
          />
          <IoSearchOutline
            className="search-icon absolute top-3 left-3"
            size={22}
          />
        </div>
      </div>
    </>
  );
}

export default SelectBox;
