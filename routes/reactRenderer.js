import path from 'path';
import React from 'react';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';

export default function (routes, data = {
    template: 'default',    // 樣板path
    vars: {
        bundle: ''          // 預設js bundle 名稱
    }
}) {
    return (req, res, next) => {
        data.vars.bundle = data.vars.bundle || `${req.baseUrl.slice(1)}.bundle`;
        match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
            if (error) {
                next(error);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                const html = renderToString(<RouterContext {...renderProps} />);
                res.render(data.template, Object.assign(data.vars, { reactContent: html }));
            } else {
                next();
            }
        });
    }
}
