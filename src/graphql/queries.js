/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChapter = /* GraphQL */ `
  query GetChapter($id: ID!) {
    getChapter(id: $id) {
      id
      storyID
      CHAPTER_INDEX
      CHAPTER_NAME
      CONTENT
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listChapters = /* GraphQL */ `
  query ListChapters(
    $filter: ModelChapterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storyID
        CHAPTER_INDEX
        CHAPTER_NAME
        CONTENT
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChapters = /* GraphQL */ `
  query SyncChapters(
    $filter: ModelChapterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChapters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        storyID
        CHAPTER_INDEX
        CHAPTER_NAME
        CONTENT
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      STORY_NAME
      STORY_CATEGORY
      STORY_PHOTO_PATH
      STORY_INTRO
      TOTAL_TIME_SEC
      Chapters {
        items {
          id
          storyID
          CHAPTER_INDEX
          CHAPTER_NAME
          CONTENT
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStories = /* GraphQL */ `
  query ListStories(
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
        Chapters {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStories = /* GraphQL */ `
  query SyncStories(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        STORY_NAME
        STORY_CATEGORY
        STORY_PHOTO_PATH
        STORY_INTRO
        TOTAL_TIME_SEC
        Chapters {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      UserAddVoices {
        items {
          id
          userID
          onlinevoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserUploadVoices {
        items {
          id
          userID
          VOICE_NAME
          VOICE_RELATION
          VOICE_PHOTO_PATH
          VOICE_PATH
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      EMAIL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserAddVoices {
          nextToken
          startedAt
        }
        UserUploadVoices {
          nextToken
          startedAt
        }
        EMAIL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        UserAddVoices {
          nextToken
          startedAt
        }
        UserUploadVoices {
          nextToken
          startedAt
        }
        EMAIL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOnlineVoice = /* GraphQL */ `
  query GetOnlineVoice($id: ID!) {
    getOnlineVoice(id: $id) {
      id
      VOICE_NAME
      VOICE_PHOTO_PATH
      VOICE_PATH
      UserAddVoices {
        items {
          id
          userID
          onlinevoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOnlineVoices = /* GraphQL */ `
  query ListOnlineVoices(
    $filter: ModelOnlineVoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOnlineVoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        VOICE_NAME
        VOICE_PHOTO_PATH
        VOICE_PATH
        UserAddVoices {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOnlineVoices = /* GraphQL */ `
  query SyncOnlineVoices(
    $filter: ModelOnlineVoiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOnlineVoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        VOICE_NAME
        VOICE_PHOTO_PATH
        VOICE_PATH
        UserAddVoices {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserAddVoice = /* GraphQL */ `
  query GetUserAddVoice($id: ID!) {
    getUserAddVoice(id: $id) {
      id
      userID
      onlinevoiceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserAddVoices = /* GraphQL */ `
  query ListUserAddVoices(
    $filter: ModelUserAddVoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAddVoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        onlinevoiceID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserAddVoices = /* GraphQL */ `
  query SyncUserAddVoices(
    $filter: ModelUserAddVoiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserAddVoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        onlinevoiceID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserUploadVoice = /* GraphQL */ `
  query GetUserUploadVoice($id: ID!) {
    getUserUploadVoice(id: $id) {
      id
      userID
      VOICE_NAME
      VOICE_RELATION
      VOICE_PHOTO_PATH
      VOICE_PATH
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserUploadVoices = /* GraphQL */ `
  query ListUserUploadVoices(
    $filter: ModelUserUploadVoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserUploadVoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        VOICE_NAME
        VOICE_RELATION
        VOICE_PHOTO_PATH
        VOICE_PATH
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserUploadVoices = /* GraphQL */ `
  query SyncUserUploadVoices(
    $filter: ModelUserUploadVoiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserUploadVoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        VOICE_NAME
        VOICE_RELATION
        VOICE_PHOTO_PATH
        VOICE_PATH
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
