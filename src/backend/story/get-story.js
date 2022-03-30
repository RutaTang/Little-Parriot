import { API, graphqlOperation } from 'aws-amplify';
import { listStories } from '../../graphql/queries';

// Get all columns in story table
export const listAllStories = async function () {
  const result = await API.graphql(graphqlOperation(listStories));
  return result;
};

// Get information of all the stories
export const listStoryInfo = async function () {
  const graphqlQuery = `
    query ListStoryInfo(
      $filter: ModelStoryFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          STORY_NAME
          STORY_PHOTO_PATH
          STORY_INTRO_PATH
          STORY_TEXT_PATH
        }
      }
    }
  `;
  const result = await API.graphql(graphqlOperation(graphqlQuery));
  return result;
};
