import React from 'react';
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm";
import  expect  from "expect";

function setup(saving) {
    let props = {
        course: { }, saving: saving, errors: {},
        onSave: () => { },
        onChange: () => { }
    };
    let rendered = TestUtils.createRenderer();
    rendered.render(<CourseForm {...props} />);
    let output = rendered.getRenderOutput();
    return {
        props,
        output,
        rendered
    };
}

describe('CourseForm via React Test Utils', () => {
    it('Renders the form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form')
        let [h1] = output.props.children;       
        expect(h1.type).toBe('h1')
    });
    it('Save button is labeled "Save" when not saving',()=> {
        const {output}=setup(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });
    it('Save button is labeled "Saving..." when saving',()=> {
        const {output}=setup(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
})