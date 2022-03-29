import { API, graphqlOperation } from 'aws-amplify';
import { listStories } from '../../graphql/queries';

export const getAllStories = async function () {
    const result = await API.graphql(graphqlOperation(listStories));
    return result;
};
