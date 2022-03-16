/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
export const onCreateOnlineVoice = /* GraphQL */ `
  subscription OnCreateOnlineVoice {
    onCreateOnlineVoice {
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
export const onUpdateOnlineVoice = /* GraphQL */ `
  subscription OnUpdateOnlineVoice {
    onUpdateOnlineVoice {
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
export const onDeleteOnlineVoice = /* GraphQL */ `
  subscription OnDeleteOnlineVoice {
    onDeleteOnlineVoice {
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
export const onCreateUserAddVoice = /* GraphQL */ `
  subscription OnCreateUserAddVoice {
    onCreateUserAddVoice {
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
export const onUpdateUserAddVoice = /* GraphQL */ `
  subscription OnUpdateUserAddVoice {
    onUpdateUserAddVoice {
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
export const onDeleteUserAddVoice = /* GraphQL */ `
  subscription OnDeleteUserAddVoice {
    onDeleteUserAddVoice {
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
export const onCreateUserUploadVoice = /* GraphQL */ `
  subscription OnCreateUserUploadVoice {
    onCreateUserUploadVoice {
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
export const onUpdateUserUploadVoice = /* GraphQL */ `
  subscription OnUpdateUserUploadVoice {
    onUpdateUserUploadVoice {
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
export const onDeleteUserUploadVoice = /* GraphQL */ `
  subscription OnDeleteUserUploadVoice {
    onDeleteUserUploadVoice {
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
