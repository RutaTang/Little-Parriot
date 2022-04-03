import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChapterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserAddVoiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserUploadVoiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OnlineVoiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Chapter {
  readonly id: string;
  readonly storyID: string;
  readonly CHAPTER_INDEX?: number;
  readonly CHAPTER_NAME?: string;
  readonly CONTENT?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Chapter, ChapterMetaData>);
  static copyOf(source: Chapter, mutator: (draft: MutableModel<Chapter, ChapterMetaData>) => MutableModel<Chapter, ChapterMetaData> | void): Chapter;
}

export declare class Story {
  readonly id: string;
  readonly STORY_NAME?: string;
  readonly STORY_CATEGORY?: string;
  readonly STORY_PHOTO_PATH?: string;
  readonly STORY_INTRO?: string;
  readonly TOTAL_TIME_SEC?: number;
  readonly Chapters?: (Chapter | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}

export declare class User {
  readonly id: string;
  readonly UserAddVoices?: (UserAddVoice | null)[];
  readonly UserUploadVoices?: (UserUploadVoice | null)[];
  readonly EMAIL?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class UserAddVoice {
  readonly id: string;
  readonly userID: string;
  readonly onlinevoiceID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserAddVoice, UserAddVoiceMetaData>);
  static copyOf(source: UserAddVoice, mutator: (draft: MutableModel<UserAddVoice, UserAddVoiceMetaData>) => MutableModel<UserAddVoice, UserAddVoiceMetaData> | void): UserAddVoice;
}

export declare class UserUploadVoice {
  readonly id: string;
  readonly userID: string;
  readonly VOICE_NAME?: string;
  readonly VOICE_RELATION?: string;
  readonly VOICE_PHOTO_PATH?: string;
  readonly VOICE_PATH?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserUploadVoice, UserUploadVoiceMetaData>);
  static copyOf(source: UserUploadVoice, mutator: (draft: MutableModel<UserUploadVoice, UserUploadVoiceMetaData>) => MutableModel<UserUploadVoice, UserUploadVoiceMetaData> | void): UserUploadVoice;
}

export declare class OnlineVoice {
  readonly id: string;
  readonly VOICE_NAME?: string;
  readonly VOICE_PHOTO_PATH?: string;
  readonly VOICE_PATH?: string;
  readonly UserAddVoices?: (UserAddVoice | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OnlineVoice, OnlineVoiceMetaData>);
  static copyOf(source: OnlineVoice, mutator: (draft: MutableModel<OnlineVoice, OnlineVoiceMetaData>) => MutableModel<OnlineVoice, OnlineVoiceMetaData> | void): OnlineVoice;
}