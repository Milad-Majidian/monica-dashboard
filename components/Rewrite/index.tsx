"use client";

import { responseAtom } from "@/lib/response-atom";
import { completions } from "@/services/completion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Response from "./response";
import { FormControlLabel, styled, Switch } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Textarea from "../Tools/TextArea";
import SelectBox from "../Tools/SelectBox";
import SwitchBox from "../Tools/switch";
import ButtonBox from "../Tools/ButtonBox";
import SelectBoxV from "../Tools/selectBox-v";

const AdvancedResult = Array.from({ length: 4 }, (_, index) => (
  <div key={index} className="col-span-2">
    <SelectBox
      options={[
        "Auto",
        "Amicable",
        " Friendly",
        "Hostile",
        "Formal",
        "Informal",
        "Professional",
        "Casual",
        "Positive",
      ]}
      onSelect={(value: any) => console.log(value)}
    />
  </div>
));

function ReWrite() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useAtom(responseAtom);

  const [advancedOption, setAdvancedOption] = useState(false);

  const placeholder =
    "paste your text that you wish to rewrite or improve ...  ";

  /* Rewrite function */
  async function rewrite() {
    try {
      console.log("message", message);

      const response = await completions({ message: message });
      const decoder = new TextDecoder("utf-8");
      setAnswer("");

      if (!response) {
        console.log("Error fetching response");
        return;
      }

      const reader = response.getReader();

      while (true) {
        const chunk = await reader?.read();
        const { done, value } = chunk;
        if (done) {
          console.log("Stream complete");
          break;
        }
        const decodedChunk = decoder.decode(value);
        const lines = decodedChunk.split("\n");

        const parsedLines = lines
          .map((line) => line.replace(/^data: /, "").trim())
          .filter((line) => line !== "" && line !== "[DONE]")
          .map((line) => {
            try {
              return JSON.parse(line);
            } catch (error) {
              return null;
            }
          })
          .filter((line) => line !== null);

        for (const parsedLine of parsedLines) {
          const { choices } = parsedLine;
          const { delta } = choices[0];
          const { content } = delta;
          if (content) {
            //add to the answer
            if (content) {
              setAnswer((answer) => answer + content + " ");
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {}, [message]);

  return (
    <>
      <section>
        <div className="grid lg:grid-cols-3">
          <div className="col-span-1 bg-bgSecondary border boder-solid border-borderPrimary ">
            <div className="flex justify-start items-center gap-1 h-[80px] border-b border-solid border-borderSecondary px-[36px]">
              <FaPencilAlt size={20} />
              <h1 className="text-[24px] font-[500]">ReWrite</h1>
            </div>
            <div className="max-h-full flex flex-col px-[36px]">
              <Textarea
                placeholder={placeholder}
                onChange={(e) => {
                  setMessage(e.target.value);
                  rewrite();
                }}
              />

              <SelectBox
                options={[
                  "English",
                  "Spanish",
                  "French",
                  "German",
                  "Italian",
                  "Portuguese",
                  "Dutch",
                  "Russian",
                  "Chinese",
                  "Japanese",
                ]}
                onSelect={(value: any) => console.log(value)}
              />
              <SwitchBox
                advancedOption={advancedOption}
                setAdvancedOption={setAdvancedOption}
              />
              {advancedOption && (
                <div className="grid grid-cols-4 gap-3">{AdvancedResult}</div>
              )}
              <div className="grid grid-cols-2 justify-center items-center gap-3">
                <div className="col-span-1 mt-6">
                  <SelectBoxV options={["GPT-3.5"]} />
                </div>
                <div className="col-span-1 ">
                  <ButtonBox />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            {/* <TextareaAutosize
                className="'w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0 box-border"
                aria-label="Demo input"
                placeholder="Empty"
              />  */}
            <Response />
            {/* <button
              className="bg-primaryLight text-gray-700 font-[500] py-2 px-4 rounded-lg mt-4 hover:bg-primaryDark transition duration-200 ease-in-out"
              onClick={() => {
                rewrite();
              }}
            >
              Rewrite
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ReWrite;
