import * as React from 'react';
import { render } from 'react-dom';

export const Hello = () => (
    <div>
        test
        test
        или{' '}
        <a>
            Duo
        </a>
        .
    </div>
);

render(<Hello />, document.body);
