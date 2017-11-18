function response(status, result, error) {
    response = {
        'status': status,
        'result': result,
        'errorMessage': error
    };
    return response
}
module.exports = response;