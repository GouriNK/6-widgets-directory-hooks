// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState, useEffect } from "react";
import axios from "axios";

const Convert = ({language, text}) => {

    const [translatedText, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
          setDebouncedText(text);
        }, 500);
    
        return () => {
          clearTimeout(timerId);
        };
      }, [text]);

    useEffect(()=>{
    const doTranslate = async () => {
        const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params : {
                q : text,
                target : language.value,
                key : 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        });

        setTranslated(data.data.translations[0].translatedText);
        
    }

    doTranslate();
       
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translatedText}</h1>
        </div>
    );
}

export default Convert;