  import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import RootLayout from 'layouts/Root';

function shallowRender (component) {
    const renderer = new ReactShallowRenderer();

    renderer.render(component);
    return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
    return shallowRender(<RootLayout {...props} />);
}

describe('(Layout) Root', function () {
    let _component;
    let _props;
    let _child;

    beforeEach(function () {
        _child = <h1 className='child'>Child</h1>;
        _props = {
            children : _child,
            route: {
                routes: [<div />]
            }
        };

        _component = shallowRenderWithProps(_props);
    });

    it('Should render a <h1> inside with route <div>.', function () {
        expect(_component.type).to.equal('div');
    });
});
