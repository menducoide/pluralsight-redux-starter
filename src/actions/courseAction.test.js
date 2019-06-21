 import  expect  from "expect";
 import * as  courseActions from './courseAction';
 import * as  types from './actionTypes';


 describe('Course Actions', () => {
    describe('CreateCourseSuccess', () => {
        it('shuld create a CREATE_COURSE_SUCCESS action',()=> {
           const course = { id:"clean-code", title : 'Clean Code'};
            const expectedAction = {
                type : types.CREATE_COURSE_SUCCESS,
                course : course
            };
            //act
                 const action = courseActions.createCourseSuccess(course);
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
 
});
