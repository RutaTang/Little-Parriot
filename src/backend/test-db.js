import { API } from 'aws-amplify';
import { listStories } from '../graphql/queries';

const result = await API.graphql(listStories);
console.log(result);
