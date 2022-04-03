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
          id
          STORY_NAME
          STORY_CATEGORY
          STORY_PHOTO_PATH
          STORY_INTRO
          TOTAL_TIME_SEC
        }
      }
    }
  `;
  const result = await API.graphql(graphqlOperation(graphqlQuery));
  return result;
};

// Get the stories that belongs to specified category
export const listStoriesByCategory = async function (category) {
  const tempFilter = {
    STORY_CATEGORY: {eq: category}
  };

  const graphqlQuery = `
    query ListStoriesByCategory(
      $filter: ModelStoryFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          STORY_NAME
          STORY_PHOTO_PATH
          STORY_INTRO
          TOTAL_TIME_SEC
        }
      }
    }
  `;

  const result = await API.graphql(graphqlOperation(graphqlQuery, {filter: tempFilter}));
  return result;
};

// Get chapters of specified story by story ID
export const listChaptersByID = async function (storyID) {
  const tempFilter = {
    storyID: {eq: storyID}
  };

  const graphqlQuery = `
    query ListChaptersByID(
      $filter: ModelChapterFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          CHAPTER_INDEX
          CHAPTER_NAME
          CONTENT
        }
      }
    }
  `;

  const result = await API.graphql(graphqlOperation(graphqlQuery, {filter: tempFilter}));
  return result;
};
