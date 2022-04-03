import { Predictions } from "aws-amplify";

const generateTextToSpeech = async (textToGenerateSpeech, voiceId) => {
  const result = await Predictions.convert({
    textToSpeech: {
      source: {
        text: textToGenerateSpeech,
      },
      voiceId: voiceId,
    },
  })
	return result
};

export { generateTextToSpeech };
