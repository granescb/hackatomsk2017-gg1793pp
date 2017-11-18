function response(status, result, error) {
    response = {
        'status': status,
        'result': result,
        'error_message': error
    };
    return response
}
module.exports = response;