import { useEffect,useState } from "react";
import { getAllStories } from "../backend/story/get-story";

const TestApi = () => {
  const [json, setJson] = useState();
  useEffect(() => {
    getAllStories().then((jsonTest) => {
      setJson(JSON.stringify(jsonTest, null, 2));
    });
  }, [json]);

  return <pre>{json}</pre>;
};

export default TestApi;
