// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, UserAddVoice, UserUploadVoice, Story, OnlineVoice } = initSchema(schema);

export {
  User,
  UserAddVoice,
  UserUploadVoice,
  Story,
  OnlineVoice
};