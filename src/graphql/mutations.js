/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
      id
      STORY_NAME
      STORY_PHOTO_PATH
      STORY_INTRO_PATH
      STORY_TEXT_PATH
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
      id
      STORY_NAME
      STORY_PHOTO_PATH
      STORY_INTRO_PATH
      STORY_TEXT_PATH
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
      id
      STORY_NAME
      STORY_PHOTO_PATH
      STORY_INTRO_PATH
      STORY_TEXT_PATH
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOnlineVoice = /* GraphQL */ `
  mutation CreateOnlineVoice(
    $input: CreateOnlineVoiceInput!
    $condition: ModelOnlineVoiceConditionInput
  ) {
    createOnlineVoice(input: $input, condition: $condition) {
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
export const updateOnlineVoice = /* GraphQL */ `
  mutation UpdateOnlineVoice(
    $input: UpdateOnlineVoiceInput!
    $condition: ModelOnlineVoiceConditionInput
  ) {
    updateOnlineVoice(input: $input, condition: $condition) {
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
export const deleteOnlineVoice = /* GraphQL */ `
  mutation DeleteOnlineVoice(
    $input: DeleteOnlineVoiceInput!
    $condition: ModelOnlineVoiceConditionInput
  ) {
    deleteOnlineVoice(input: $input, condition: $condition) {
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
export const createUserAddVoice = /* GraphQL */ `
  mutation CreateUserAddVoice(
    $input: CreateUserAddVoiceInput!
    $condition: ModelUserAddVoiceConditionInput
  ) {
    createUserAddVoice(input: $input, condition: $condition) {
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
export const updateUserAddVoice = /* GraphQL */ `
  mutation UpdateUserAddVoice(
    $input: UpdateUserAddVoiceInput!
    $condition: ModelUserAddVoiceConditionInput
  ) {
    updateUserAddVoice(input: $input, condition: $condition) {
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
export const deleteUserAddVoice = /* GraphQL */ `
  mutation DeleteUserAddVoice(
    $input: DeleteUserAddVoiceInput!
    $condition: ModelUserAddVoiceConditionInput
  ) {
    deleteUserAddVoice(input: $input, condition: $condition) {
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
export const createUserUploadVoice = /* GraphQL */ `
  mutation CreateUserUploadVoice(
    $input: CreateUserUploadVoiceInput!
    $condition: ModelUserUploadVoiceConditionInput
  ) {
    createUserUploadVoice(input: $input, condition: $condition) {
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
export const updateUserUploadVoice = /* GraphQL */ `
  mutation UpdateUserUploadVoice(
    $input: UpdateUserUploadVoiceInput!
    $condition: ModelUserUploadVoiceConditionInput
  ) {
    updateUserUploadVoice(input: $input, condition: $condition) {
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
export const deleteUserUploadVoice = /* GraphQL */ `
  mutation DeleteUserUploadVoice(
    $input: DeleteUserUploadVoiceInput!
    $condition: ModelUserUploadVoiceConditionInput
  ) {
    deleteUserUploadVoice(input: $input, condition: $condition) {
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
