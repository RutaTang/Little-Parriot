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
  readonly CHAPTER_INDEX?: number | null;
  readonly CHAPTER_NAME?: string | null;
  readonly CONTENT?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Chapter, ChapterMetaData>);
  static copyOf(source: Chapter, mutator: (draft: MutableModel<Chapter, ChapterMetaData>) => MutableModel<Chapter, ChapterMetaData> | void): Chapter;
}

export declare class Story {
  readonly id: string;
  readonly STORY_NAME?: string | null;
  readonly STORY_CATEGORY?: string | null;
  readonly STORY_PHOTO_PATH?: string | null;
  readonly STORY_INTRO?: string | null;
  readonly Chapters?: (Chapter | null)[] | null;
  readonly TOTAL_TIME_SEC?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}

export declare class User {
  readonly id: string;
  readonly UserAddVoices?: (UserAddVoice | null)[] | null;
  readonly UserUploadVoices?: (UserUploadVoice | null)[] | null;
  readonly EMAIL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class UserAddVoice {
  readonly id: string;
  readonly userID: string;
  readonly onlinevoiceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserAddVoice, UserAddVoiceMetaData>);
  static copyOf(source: UserAddVoice, mutator: (draft: MutableModel<UserAddVoice, UserAddVoiceMetaData>) => MutableModel<UserAddVoice, UserAddVoiceMetaData> | void): UserAddVoice;
}

export declare class UserUploadVoice {
  readonly id: string;
  readonly userID: string;
  readonly VOICE_NAME?: string | null;
  readonly VOICE_RELATION?: string | null;
  readonly VOICE_PHOTO_PATH?: string | null;
  readonly VOICE_PATH?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserUploadVoice, UserUploadVoiceMetaData>);
  static copyOf(source: UserUploadVoice, mutator: (draft: MutableModel<UserUploadVoice, UserUploadVoiceMetaData>) => MutableModel<UserUploadVoice, UserUploadVoiceMetaData> | void): UserUploadVoice;
}

export declare class OnlineVoice {
  readonly id: string;
  readonly VOICE_NAME?: string | null;
  readonly VOICE_PHOTO_PATH?: string | null;
  readonly VOICE_PATH?: string | null;
  readonly UserAddVoices?: (UserAddVoice | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OnlineVoice, OnlineVoiceMetaData>);
  static copyOf(source: OnlineVoice, mutator: (draft: MutableModel<OnlineVoice, OnlineVoiceMetaData>) => MutableModel<OnlineVoice, OnlineVoiceMetaData> | void): OnlineVoice;
}