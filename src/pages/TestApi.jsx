import {getAllStories} from '../backend/story/get-story';

const jsonTest = await getAllStories();

const TestApi = () => {
  const json = JSON.stringify(jsonTest, null, 2);;

  return (
    <pre>
      {json}
    </pre>
  )
}

export default TestApi;
