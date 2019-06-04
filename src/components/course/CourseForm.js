import React from "react";
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}></TextInput>
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}></SelectInput>

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}></TextInput>
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}></TextInput>
            <input
                type='submit'
                disabled={saving}
                value={saving? 'Saving...' : 'Save'}
                className='btn btn-primary'
                onClick={onSave}/>
        </form>
    );
}

CourseForm.propTypes ={
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    saving: PropTypes.bool,     
    errors: PropTypes.object
};
export default CourseForm;