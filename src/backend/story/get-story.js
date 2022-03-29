import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listStories } from '../../graphql/queries';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

export const getAllStories = async function () {
    const result = await API.graphql(graphqlOperation(listStories));
    return result;
};
