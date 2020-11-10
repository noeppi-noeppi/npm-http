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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var qs = __importStar(require("querystring"));
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
    H["UserAgent"] = "User-Agent";
})(H = exports.H || (exports.H = {}));
var myaxios = axios_1.default.create();
var Http = (function () {
    function Http(req) {
        if (req) {
            this.req = req;
        }
        else {
            this.req = {
                url: '',
                path: '',
                body: {},
                params: {},
                headers: {},
                body_type: Body.NONE,
                oauth_token: null,
                axios: myaxios
            };
        }
    }
    Http.axios = function (axios) {
        return new Http({
            url: '',
            path: '',
            body: {},
            params: {},
            headers: {},
            body_type: Body.NONE,
            oauth_token: null,
            axios: axios
        });
    };
    Http.url = function (url) {
        return new Http({
            url: url,
            path: '',
            body: {},
            params: {},
            headers: {},
            body_type: Body.NONE,
            oauth_token: null,
            axios: myaxios
        });
    };
    Http.prototype.url = function (url) {
        var req = __assign({}, this.req);
        req.url = url;
        return new Http(req);
    };
    Http.prototype.path = function (path) {
        var req = __assign({}, this.req);
        req.path = path;
        return new Http(req);
    };
    Http.prototype.cookie = function (cookie) {
        var _a;
        var req = __assign({}, this.req);
        req.headers = __assign(__assign({}, this.req.headers), (_a = {}, _a[H.Cookie] = cookie, _a));
        return new Http(req);
    };
    Http.prototype.user_agent = function (user_agent) {
        var _a;
        var req = __assign({}, this.req);
        req.headers = __assign(__assign({}, this.req.headers), (_a = {}, _a[H.UserAgent] = user_agent, _a));
        return new Http(req);
    };
    Http.prototype.header = function (key, value) {
        var _a;
        var req = __assign({}, this.req);
        req.headers = __assign(__assign({}, this.req.headers), (_a = {}, _a[key] = value, _a));
        return new Http(req);
    };
    Http.prototype.headers = function (headers) {
        var req = __assign({}, this.req);
        req.headers = __assign(__assign({}, this.req.headers), headers);
        return new Http(req);
    };
    Http.prototype.param = function (key, value) {
        var _a;
        var req = __assign({}, this.req);
        req.params = __assign(__assign({}, this.req.params), (_a = {}, _a[key] = value, _a));
        return new Http(req);
    };
    Http.prototype.params = function (params) {
        var req = __assign({}, this.req);
        req.params = __assign(__assign({}, this.req.params), params);
        return new Http(req);
    };
    Http.prototype.body_form = function (key, value) {
        var _a, _b;
        var req = __assign({}, this.req);
        req.body_type = Body.FORM;
        req.headers = Object.assign(this.req.headers, (_a = {}, _a[H.ContentType] = 'application/x-www-form-urlencoded', _a));
        req.body = Object.assign(this.req.body, (_b = {}, _b[key] = value, _b));
        return new Http(req);
    };
    Http.prototype.body_forms = function (body) {
        var _a;
        var req = __assign({}, this.req);
        req.body_type = Body.FORM;
        req.headers = Object.assign(this.req.headers, (_a = {}, _a[H.ContentType] = 'application/x-www-form-urlencoded', _a));
        req.body = Object.assign(this.req.body, body);
        return new Http(req);
    };
    Http.prototype.body_json_ = function (key, value) {
        var _a, _b;
        var req = __assign({}, this.req);
        req.body_type = Body.JSON;
        req.headers = Object.assign(this.req.headers, (_a = {}, _a[H.ContentType] = 'application/json', _a));
        req.body = Object.assign(this.req.body, (_b = {}, _b[key] = value, _b));
        return new Http(req);
    };
    Http.prototype.body_json = function (body) {
        var _a;
        var req = __assign({}, this.req);
        req.body_type = Body.JSON;
        req.headers = Object.assign(this.req.headers, (_a = {}, _a[H.ContentType] = 'application/json', _a));
        req.body = Object.assign(this.req.body, body);
        return new Http(req);
    };
    Http.prototype.auth_basic = function (username, password) {
        var _a;
        var req = __assign({}, this.req);
        var hash = Buffer.from(username + ':' + password).toString('base64');
        req.headers = Object.assign(this.req.headers, (_a = {}, _a[H.Authorization] = "Basic " + hash, _a));
        return new Http(req);
    };
    Http.prototype.auth_bearer = function (token) {
        var _a;
        var req = __assign({}, this.req);
        req.headers = Object.assign(this.req.headers, (_a = {}, _a[H.Authorization] = "Bearer " + token, _a));
        return new Http(req);
    };
    Http.prototype.auth_oauth2_password = function (token) {
        var req = __assign({}, this.req);
        req.oauth_token = token;
        return new Http(req);
    };
    Http.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req, token;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        req = __assign({}, this.req);
                        if (req.body_type != Body.NONE) {
                            throw Error('Body is not allowed for GET');
                        }
                        if (!req.oauth_token) return [3, 2];
                        return [4, req.oauth_token.async_access_token()];
                    case 1:
                        token = _b.sent();
                        req.headers = Object.assign(this.req.headers, (_a = {}, _a[H.Authorization] = "Bearer " + token, _a));
                        _b.label = 2;
                    case 2: return [2, req.axios.get(req.url + req.path, { params: req.params, headers: req.headers })];
                }
            });
        });
    };
    Http.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Http.preprocess(this)];
                    case 1:
                        req = _a.sent();
                        return [2, req.axios.post(req.url + req.path, req.body, { headers: req.headers })];
                }
            });
        });
    };
    Http.prototype.put = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Http.preprocess(this)];
                    case 1:
                        req = _a.sent();
                        return [2, req.axios.put(req.url + req.path, req.body, { headers: req.headers })];
                }
            });
        });
    };
    Http.prototype.patch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Http.preprocess(this)];
                    case 1:
                        req = _a.sent();
                        return [2, req.axios.patch(req.url + req.path, req.body, { headers: req.headers })];
                }
            });
        });
    };
    Http.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Http.preprocess(this)];
                    case 1:
                        req = _a.sent();
                        if (req.body_type != Body.NONE) {
                            throw Error('Body is not allowed for DELETE');
                        }
                        return [2, req.axios.delete(req.url + req.path, { params: req.params, headers: req.headers })];
                }
            });
        });
    };
    Http.preprocess = function (http) {
        return __awaiter(this, void 0, void 0, function () {
            var req, token;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        req = __assign({}, http.req);
                        switch (req.body_type) {
                            case Body.FORM:
                                req.body = qs.stringify(req.body);
                                break;
                            default:
                                break;
                        }
                        if (!req.oauth_token) return [3, 2];
                        return [4, req.oauth_token.async_access_token()];
                    case 1:
                        token = _b.sent();
                        req.headers = Object.assign(http.req.headers, (_a = {}, _a[H.Authorization] = "Bearer " + token, _a));
                        _b.label = 2;
                    case 2: return [2, req];
                }
            });
        });
    };
    return Http;
}());
exports.default = Http;
//# sourceMappingURL=Http.js.map