'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FetchToRequest = exports.headers = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.handleResponse = handleResponse;

require('promise-polyfill');

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = exports.headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
};

function handleResponse(response) {
    if (!(response instanceof Object)) {
        throw new TypeError('Value of argument "response" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(response));
    }

    return new _promise2.default(function (resolve, reject) {
        response.json().then(function (data) {
            return response.status > 399 ? reject(data) : resolve(data);
        }).catch(function () {
            return reject({
                error: {
                    status: response.status,
                    message: 'Unnable to parse response body'
                }
            });
        });
    });
}

var FetchToRequest = exports.FetchToRequest = function () {
    function FetchToRequest() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, FetchToRequest);

        if (!(options instanceof Object)) {
            throw new TypeError('Value of argument "options" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(options));
        }

        this._options = (0, _extends3.default)({
            headers: headers
        }, options);
    }

    (0, _createClass3.default)(FetchToRequest, [{
        key: 'get',
        value: function get() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            function _ref2(_id2) {
                if (!(_id2 instanceof _promise2.default)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nPromise\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
            }

            if (!(typeof url === 'string')) {
                throw new TypeError('Value of argument "url" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(url));
            }

            if (!(options instanceof Object)) {
                throw new TypeError('Value of argument "options" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(options));
            }

            return _ref2(window.fetch(url, (0, _extends3.default)({}, this._options, options, {
                method: 'GET'
            })).then(function (response) {
                return handleResponse(response);
            }));
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            function _ref3(_id3) {
                if (!(_id3 instanceof _promise2.default)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nPromise\n\nGot:\n' + _inspect(_id3));
                }

                return _id3;
            }

            if (!(typeof url === 'string')) {
                throw new TypeError('Value of argument "url" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(url));
            }

            if (!(options instanceof Object)) {
                throw new TypeError('Value of argument "options" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(options));
            }

            return _ref3(window.fetch(url, (0, _extends3.default)({}, this._options, options, {
                method: 'DELETE'
            })).then(function (response) {
                return handleResponse(response);
            }));
        }
    }, {
        key: 'post',
        value: function post() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            function _ref4(_id4) {
                if (!(_id4 instanceof _promise2.default)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nPromise\n\nGot:\n' + _inspect(_id4));
                }

                return _id4;
            }

            if (!(typeof url === 'string')) {
                throw new TypeError('Value of argument "url" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(url));
            }

            if (!(data instanceof Object)) {
                throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
            }

            if (!(options instanceof Object)) {
                throw new TypeError('Value of argument "options" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(options));
            }

            return _ref4(window.fetch(url, (0, _extends3.default)({}, this._options, options, {
                body: (0, _stringify2.default)(data),
                method: 'POST'
            })).then(function (response) {
                return handleResponse(response);
            }));
        }
    }, {
        key: 'put',
        value: function put() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            function _ref5(_id5) {
                if (!(_id5 instanceof _promise2.default)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nPromise\n\nGot:\n' + _inspect(_id5));
                }

                return _id5;
            }

            if (!(typeof url === 'string')) {
                throw new TypeError('Value of argument "url" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(url));
            }

            if (!(data instanceof Object)) {
                throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
            }

            if (!(options instanceof Object)) {
                throw new TypeError('Value of argument "options" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(options));
            }

            return _ref5(window.fetch(url, (0, _extends3.default)({}, this._options, {
                body: (0, _stringify2.default)(data)
            }, options, {
                method: 'PUT'
            })).then(function (response) {
                return handleResponse(response);
            }));
        }
    }, {
        key: 'patch',
        value: function patch() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            function _ref6(_id6) {
                if (!(_id6 instanceof _promise2.default)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nPromise\n\nGot:\n' + _inspect(_id6));
                }

                return _id6;
            }

            if (!(typeof url === 'string')) {
                throw new TypeError('Value of argument "url" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(url));
            }

            if (!(data instanceof Object)) {
                throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
            }

            if (!(options instanceof Object)) {
                throw new TypeError('Value of argument "options" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(options));
            }

            return _ref6(window.fetch(url, (0, _extends3.default)({}, this._options, options, {
                body: (0, _stringify2.default)(data),
                method: 'PATCH'
            })).then(function (response) {
                return handleResponse(response);
            }));
        }
    }]);
    return FetchToRequest;
}();

exports.default = new FetchToRequest();

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        var keys = (0, _keys2.default)(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}