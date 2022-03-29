import { API, graphqlOperation } from 'aws-amplify';
import { listStories } from '../graphql/queries';

// import getAllStories from "../backend/story/get-story";
// import "../backend/test-db";

const FAKE_JSON = await API.graphql(listStories);
// const FAKE_JSON = [
//   {
//     id: 1,
//     name: "Hot",
//   },
//   {
//     id: 2,
//     name: "Recommand",
//   },
//   {
//     id: 3,
//     name: "Fair Tale",
//   },
//   {
//     id: 4,
//     name: "Cartoon",
//   },
//   {
//     id: 5,
//     name: "Bedtime Story",
//   },
//   {
//     id: 6,
//     name: "Comedy",
//   },
// ];

const TestApi = () => {
  const json = JSON.stringify(FAKE_JSON, null, 2);;

  return (
    <pre>
      {json}
    </pre>
  )
}

export default TestApi;
