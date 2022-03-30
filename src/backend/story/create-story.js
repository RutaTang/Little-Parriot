import { API, graphqlOperation } from 'aws-amplify';
import { createStory } from '../../graphql/mutations';

// Insert a new story into the table with links to S3
export const insertStory = async function (
  storyName, photoPath, introPath, textPath) {
  const newStory = {
    STORY_NAME: storyName,
    STORY_PHOTO_PATH: photoPath,
    STORY_INTRO_PATH: introPath,
    STORY_TEXT_PATH: textPath
  }

  const result = await API.graphql(graphqlOperation(createStory, {input: newStory}));
  return result;
};
