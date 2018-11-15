import React, { Component } from 'react';
import loaderIcon from '../../../src/loading.gif' 

export const Loader = props => (
    <div>
        <img alt="Loading..." src={ loaderIcon } />
    </div>
)