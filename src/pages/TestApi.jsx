import { useState } from "react";
import { listAllStories, listStoryInfo } from "../backend/story/get-story";

const TestApi = () => {
  const [json, setJson] = useState();
  listStoryInfo().then((jsonTest) => {
    setJson(JSON.stringify(jsonTest, null, 2));
  });
  return <div><pre>{json}</pre></div>;
};

export default TestApi;
