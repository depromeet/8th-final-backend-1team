import path from 'path';

import _ from 'lodash';
import YAML from 'yamljs';
import recursive from 'recursive-readdir-synchronous';

import components from './components';

// let specs = {};
const specsPath = path.join(__dirname, './specs');
const specPaths = recursive(specsPath);

const specs = _.chain(specPaths)
    .map((path) => _.assign({paths: YAML.load(path)}))
    .filter((spec) => !!spec['paths'])
    .reduce((result, spec) => _.merge(result, spec))
    .value();

export default _.merge(
    {
        openapi: '3.0.0',
        info: {
            title: '8조 파프 API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'https://fragraph.kscory.com/api/v1',
                description: 'test server (uses live data)',
            },
            {
                url: 'http://localhost:31923/api/v1',
                description: 'local server (uses live data)',
            },
        ],
        components,
        security: [
            {
                bearerAuth: []
            },
        ],
    },
    specs,
);
