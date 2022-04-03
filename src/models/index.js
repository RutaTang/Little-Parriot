// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chapter, Story, User, UserAddVoice, UserUploadVoice, OnlineVoice } = initSchema(schema);

export {
  Chapter,
  Story,
  User,
  UserAddVoice,
  UserUploadVoice,
  OnlineVoice
};