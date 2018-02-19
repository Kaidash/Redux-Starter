import { shallow } from 'enzyme';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import CoreLayout from 'layouts/AdminLayout/AdminLayout';

function shallowRender (component) {
    const renderer = new ReactShallowRenderer();

    renderer.render(component);
    return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
    return shallowRender(<CoreLayout {...props} />);
}

describe('(Layout) Core', function () {
    let _component;
    let _props;
    let _child;

    beforeEach(function () {
        _child = <h1 className='child'>Child</h1>;
        _props = {
            children : _child,
            route: {
                routes: [<div />]
            },
            jobResult: {
                image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=',
                name: 'testName'
            }
        };

        _component = shallowRenderWithProps(_props);
    });

    it('Should render as a <div>.', function () {
        expect(_component.type).to.equal('div');
    });
    it('Should contain admin image.', function () {
        expect(_component.type).to.equal('div');
        const wrapper = shallow(_component);
        expect(wrapper.find('.admin-avatar')).to.have.length(1);
        expect(wrapper.find('.admin-avatar')).to.have.style('background');
    });
    it('Should contain admin route <div>.', function () {
        expect(_component.type).to.equal('div');
        const wrapper = shallow(_component);
        expect(wrapper.find('.admin-layout__viewport div')).to.have.length(1);
    });
});
