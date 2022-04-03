import { useState } from "react";
import { listStoriesByCategory, listChaptersByID } from "../backend/story/get-story";

const TestApi = () => {
  const [json, setJson] = useState();
  listStoriesByCategory().then((jsonTest) => {
    setJson(JSON.stringify(jsonTest, null, 2));
  });
  return <div><pre>{json}</pre></div>;
};

export default TestApi;
