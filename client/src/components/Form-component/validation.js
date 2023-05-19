const validate = (form) => {

    var errors = {};

    if(!form.name) errors.name = 'Name is required';
    else if(form.name.length > 80) errors.name = 'Name is too long(Max = 80 characters)'

    if(!form.description) errors.description = 'Description is required';
    else if(form.description.length > 1300) errors.description = 'Description is too long (Max = 1300 characters)'
    
    if(!form.rating) errors.rating = 'Rating is required';

    if(!form.released) errors.released = 'Date of release is required'

    if(!form.image) errors.image = 'Image URL is required';

    if(form.genres.length < 1) errors.genres = 'Minimun one Genre is required'

    if(form.platform.length < 1) errors.platform = 'Minimun one Platforms is required'

    return errors;
}

export default validate;