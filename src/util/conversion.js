import * as _ from 'fxjs/Strict';
import * as L from 'fxjs/Lazy';

export const objectToString = _.pipe(
    L.entries,
    L.map(([key, value]) => {
        return value && typeof value === 'object' ?
            `"${key}":${value.toString()}` :
            `"${key}":"${value}"`;
    }),
    _.join(','),
    (result) => `{${result}}`,
);
