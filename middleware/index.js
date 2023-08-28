const authPlaceholder = (req, res, next) => {
    console.log('This is a check to make sure that the user is authenticated.')
    next();
    return;
}


const permissionChecker = (req, res, next) => {
    console.log('This is a check to make sure that the user is authorized to perform this action')
    next();
    return;
}

module.exports = { authPlaceholder, permissionChecker}