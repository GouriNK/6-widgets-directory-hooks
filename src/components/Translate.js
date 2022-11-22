import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const langArr = [{
    label: "German",
    value: "de"
  }, {
    label: "Hindi",
    value: "hi"
  }, {
    label: "Spanish",
    value: "es"
  }, {
    label: "French",
    value: "fr"
  }, {
    label: "English",
    value: "en"
  }];

const Translate = () => {
    const [language, setLanguage] = useState(langArr[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <div>
                <Dropdown label="Select a language" selected={language} onSelectedChange={setLanguage} options={langArr}></Dropdown>
             </div>
             <hr></hr>
             {/* <h3 className="ui header"></h3> */}
             <Convert text={text} language={language}></Convert>
        </div>
    )
};

export default Translate;