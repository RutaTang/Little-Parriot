import Amplify, { Auth, Storage } from "aws-amplify";

async function getPublicUrl(fileNameWithExtension) {
  return await Storage.get(fileNameWithExtension, { level: "public" })
}

export {getPublicUrl}
