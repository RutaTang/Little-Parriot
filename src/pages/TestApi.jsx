import { useState, useEffect } from "react";
import {generateTextToSpeech} from '../backend/story/text_to_speech'

import {
  listStoriesByCategory,
  listChaptersByID,
} from "../backend/story/get-story";

// const TestApi = () => {
//   const [json, setJson] = useState();
//   useEffect(() => {
//     listStoriesByCategory().then((jsonTest) => {
//       setJson(JSON.stringify(jsonTest, null, 2));
//     });
//   }, []);
//   return (
//     <div>
//       <pre>{json}</pre>
//     </div>
//   );
// };
//

const TestApi = () => {
  const [response, setResponse] = useState("...");
  const [textToGenerateSpeech, setTextToGenerateSpeech] =
    useState("write to speech");

  function generateTextToSpeechX(text) {
		generateTextToSpeech(textToGenerateSpeech, "Joanna");
  }

  function setText(event) {
    setTextToGenerateSpeech(event.target.value);
  }

  return (
    <div className="Text">
      <div>
        <h3>Text To Speech</h3>
        <input value={textToGenerateSpeech} onChange={setText}></input>
        <button onClick={generateTextToSpeechX}>Text to Speech</button>
        <h3>{response}</h3>
      </div>
    </div>
  );
};

export default TestApi;
