import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import ComplaintsIndex from './components/complaints_index';
import ComplaintsNew from './components/complaints_new';
import ComplaintsShow from './components/complaints_show';
import ComplaintsUpdate from './components/complaints_update';

export default (
	<Route path="/" component={ App }>
        <IndexRoute component={ ComplaintsIndex } />
        <Route path="complaints/new" component={ ComplaintsNew } />
        <Route path="complaints/update/:id" component={ ComplaintsUpdate } />
        <Route path="complaints/:id" component={ ComplaintsShow } />
        
    </Route>
);