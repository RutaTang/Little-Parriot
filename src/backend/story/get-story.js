import { API } from 'aws-amplify'
import { listStories } from '../graphql/queries'

export const getAllStories = function () {
    const result = await API.graphql(listStories);
    return result;
};
