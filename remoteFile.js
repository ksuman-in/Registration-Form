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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@uitk/react");
var AnotherComp = function (props) {
    return react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
        react_1.default.createElement("h1", null, "Edited in remote server as tsx file"),
        props.data.map(function (value, index) {
            return react_1.default.createElement("h1", { key: index }, value);
        }));
};
var RemoteCard = function (props) {
    return react_1.default.createElement("div", { style: { width: '500px', margin: '1rem', marginLeft: 'auto', marginRight: 'auto' } },
        react_1.default.createElement("h1", null, "This is a page rendered from a remote server"),
        react_1.default.createElement(AnotherComp, { data: [1, 2, 3, 4, 5] }),
        react_1.default.createElement(react_2.Card, __assign({}, props, { header: react_1.default.createElement("h1", null, "Card Header") }),
            react_1.default.createElement("p", null, "My Card Content"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement(react_2.Button, { block: true }, "Default")));
};
exports.default = RemoteCard;
