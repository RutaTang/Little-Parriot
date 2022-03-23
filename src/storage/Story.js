import Amplify, { Auth, Storage } from "aws-amplify";

async function getPublicStoryTrackLink(fileNameWithExtension) {
  return await Storage.get(fileNameWithExtension, { level: "public" })
}

export {getPublicStoryTrackLink}
