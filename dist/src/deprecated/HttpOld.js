"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H = void 0;
var axios_1 = __importDefault(require("axios"));
var querystring_1 = __importDefault(require("querystring"));
var Auth;
(function (Auth) {
    Auth[Auth["NONE"] = 0] = "NONE";
    Auth[Auth["BASIC"] = 1] = "BASIC";
    Auth[Auth["BEARER"] = 2] = "BEARER";
    Auth[Auth["AWS"] = 3] = "AWS";
    Auth[Auth["OAUTH2_PASSWORD"] = 4] = "OAUTH2_PASSWORD";
})(Auth || (Auth = {}));
var Body;
(function (Body) {
    Body[Body["NONE"] = 0] = "NONE";
    Body[Body["FORM"] = 1] = "FORM";
    Body[Body["JSON"] = 2] = "JSON";
})(Body || (Body = {}));
var H;
(function (H) {
    H["Cookie"] = "Cookie";
    H["ContentType"] = "Content-Type";
    H["Authorization"] = "Authorization";
})(H = exports.H || (exports.H = {}));
var myaxios = axios_1.default.create();
var Http = (function () {
    function Http(url) {
        this._headers = {};
        this._params = {};
        this._body = {};
        this._auth_type = Auth.NONE;
        this._body_type = Body.NONE;
        this._oauth_token = null;
        this.axios = myaxios;
        this._url = url;
    }
    Http.url = function (url, axios_instance) {
        var http = new Http(url);
        if (axios_instance) {
            http.axios = axios_instance;
        }
        return http;
    };
    Http.prototype.clone = function () {
        var http = new Http(this._url);
        http._headers = this._headers;
        http._params = this._params;
        http._body = this._body;
        http._auth_type = this._auth_type;
        http._body_type = this._body_type;
        http._oauth_token = this._oauth_token;
        http.axios = this.axios;
        return http;
    };
    Http.prototype.url = function (url) {
        this._url = url;
        return this;
    };
    Object.defineProperty(Http.prototype, "_content_type", {
        set: function (body) {
            var _a;
            switch (body) {
                case Body.FORM:
                    this._headers = __assign(__assign({}, this._headers), (_a = {}, _a[H.ContentType] = 'application/x-www-form-urlencoded', _a));
                    break;
                case Body.JSON:
                    throw Error('NotImplementedException');
            }
        },
        enumerable: false,
        configurable: true
    });
    Http.prototype.cookie = function (cookie) {
        var _a;
        var http = this.clone();
        http._headers = __assign(__assign({}, http._headers), (_a = {}, _a[H.Cookie] = cookie, _a));
        return http;
    };
    Http.prototype.header = function (key, value) {
        var _a;
        var http = this.clone();
        http._headers = __assign(__assign({}, http._headers), (_a = {}, _a[key] = value, _a));
        return http;
    };
    Http.prototype.headers = function (headers) {
        var http = this.clone();
        http._headers = __assign(__assign({}, http._headers), headers);
        return http;
    };
    Http.prototype.param = function (key, value) {
        var _a;
        var http = this.clone();
        http._params = __assign(__assign({}, http._params), (_a = {}, _a[key] = value, _a));
        return http;
    };
    Http.prototype.params = function (params) {
        var http = this.clone();
        http._params = __assign(__assign({}, http._params), params);
        return http;
    };
    Http.prototype.body_form = function (key, value) {
        var _a;
        var http = this.clone();
        http._body_type = Body.FORM;
        http._content_type = Body.FORM;
        http._body = __assign(__assign({}, http._body), (_a = {}, _a[key] = value, _a));
        return http;
    };
    Http.prototype.body_forms = function (body) {
        var http = this.clone();
        http._body_type = Body.FORM;
        http._content_type = Body.FORM;
        http._body = __assign(__assign({}, http._body), body);
        return http;
    };
    Http.prototype.body_json_ = function (key, value) {
        var _a;
        var http = this.clone();
        http._body_type = Body.JSON;
        http._content_type = Body.JSON;
        http._body = __assign(__assign({}, http._body), (_a = {}, _a[key] = value, _a));
        return http;
    };
    Http.prototype.body_json = function (body) {
        var http = this.clone();
        http._body_type = Body.JSON;
        http._content_type = Body.JSON;
        http._body = __assign(__assign({}, http._body), body);
        return http;
    };
    Http.prototype.auth_basic = function (username, password) {
        var http = this.clone();
        http._auth_type = Auth.BASIC;
        var hash = Buffer.from(username + ':' + password).toString('base64');
        return http.header(H.Authorization, "Basic " + hash);
    };
    Http.prototype.auth_bearer = function (token) {
        var http = this.clone();
        http._auth_type = Auth.BEARER;
        return http.header(H.Authorization, "Bearer " + token);
    };
    Http.prototype.auth_oauth2_password = function (token) {
        var http = this.clone();
        http._auth_type = Auth.OAUTH2_PASSWORD;
        http._oauth_token = token;
        return http;
    };
    Http.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var http, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        http = this.clone();
                        if (http._body_type != Body.NONE) {
                            throw Error('Body is not allowed for GET');
                        }
                        if (!http._oauth_token) return [3, 2];
                        _b = (_a = http).auth_bearer;
                        return [4, http._oauth_token.async_access_token()];
                    case 1:
                        http = _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2, myaxios.get(http._url, { params: http._params, headers: http._headers })];
                }
            });
        });
    };
    Http.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            var http, body, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        http = this.clone();
                        switch (this._body_type) {
                            case Body.FORM:
                                body = querystring_1.default.stringify(this._body);
                                break;
                            case Body.JSON:
                                body = this._body;
                                break;
                            case Body.NONE:
                                body = {};
                                break;
                        }
                        if (!http._oauth_token) return [3, 2];
                        _b = (_a = http).auth_bearer;
                        return [4, http._oauth_token.async_access_token()];
                    case 1:
                        http = _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2, myaxios.post(http._url, body, { headers: http._headers })];
                }
            });
        });
    };
    Http.before = function (func) {
        myaxios.interceptors.request.use(function (config) {
            func(config);
            return config;
        }, function (e) {
            return Promise.reject(e);
        });
    };
    Http.after = function (func) {
        myaxios.interceptors.response.use(function (response) {
            func(response);
            return response;
        }, function (e) {
            return Promise.reject(e);
        });
    };
    return Http;
}());
exports.default = Http;
//# sourceMappingURL=HttpOld.js.map