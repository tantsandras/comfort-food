webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/recipeCards.js":
/*!***********************************!*\
  !*** ./components/recipeCards.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeCards; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recipes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes.json */ "./recipes.json");
var _recipes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../recipes.json */ "./recipes.json", 1);

var _jsxFileName = "/home/sandra/projects/food/components/recipeCards.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0.5rem 1rem;\n  margin: 2rem;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0.75rem;\n  margin-top: 0.75rem;\n  background-color: goldenrod;\n  text-decoration: none;\n  color: white;\n  border-radius: 0.25rem;\n  text-align: center;\n  display: inline-block;\n  transition: all 0.3s;\n  font-size: 1.4rem;\n  font-family: Lato;\n  &:hover {\n    opacity: 0.6;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 2rem;\n  color: #666666;\n  font-family: Lato;\n  font-weight: 200;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n  padding: 0.75rem;\n  font-size: 1.25rem;\n  font-family: Lato;\n  font-weight: 200;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-height: 220px;\n  overflow: hidden;\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid #e2e2e2;\n  border-radius: 0.5rem;\n  //   padding: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-gap: 4rem;\n  list-style: none;\n  margin: 10% 8%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Recipes = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject());
var Food = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject2());
var PhotoPos = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].figure(_templateObject3());
var Photo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject4());
var Summary = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].figcaption(_templateObject5());
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject6());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject7());
var Browse = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject8());
var RecLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Browse)(_templateObject9());

var FoodLink = function FoodLink(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/recipe/[id]",
    as: "/recipe/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(RecLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Get recipe"));
};

var Data = function Data() {
  return _recipes_json__WEBPACK_IMPORTED_MODULE_4__.Food.map(function (item, key) {
    return __jsx(Food, {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(PhotoPos, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(Photo, {
      src: item.photo,
      alt: item.alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx(Summary, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(Name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, item.name))), __jsx(FoodLink, {
      id: item.name,
      recipe: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }));
  });
};

function RecipeCards() {
  return __jsx(Recipes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(Data, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(Food, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(PhotoPos, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(Photo, {
    src: "http://drive.google.com/uc?export=view&id=1ukHPHdTpBc7R4JmtX8KRea407M5Ky-JO",
    alt: "Several hands holding beer glasses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(Summary, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Billions upon billions"))), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?"), __jsx(FoodLink, {
    id: "Billions upon billions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), __jsx(Food, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(PhotoPos, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(Photo, {
    src: "http://drive.google.com/uc?export=view&id=1wAhdZESYZBdd23ek6dnWlm_SJ7PWk65n",
    alt: "Several friends doing a toast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(Summary, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Drake Equation"))), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Another world citizens of distant epochs from which we spring descended from astronomers Orion's sword shores of the cosmic ocean."), __jsx(FoodLink, {
    id: "Drake Equation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), __jsx(Food, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(PhotoPos, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(Photo, {
    src: "http://drive.google.com/uc?export=view&id=19AjupR0SlV8y0HtzxMtQx2nqF4ERj0mg",
    alt: "Three different glasses of beer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(Summary, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Vast cosmic arena"))), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Galaxies the ash of stellar alchemy prime number science inconspicuous motes of rock and gas brain is the seed of intelligence."), __jsx(FoodLink, {
    id: "Vast cosmic areana",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.b8b577a40239f299c475.hot-update.js.map