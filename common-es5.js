(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "../../node_modules/highlight.js/lib/languages/css.js":
  /*!****************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/highlight.js/lib/languages/css.js ***!
    \****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesCssJs(module, exports) {
    module.exports = function (hljs) {
      var FUNCTION_LIKE = {
        begin: /[\w-]+\(/,
        returnBegin: true,
        contains: [{
          className: 'built_in',
          begin: /[\w-]+/
        }, {
          begin: /\(/,
          end: /\)/,
          contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE]
        }]
      };
      var ATTRIBUTE = {
        className: 'attribute',
        begin: /\S/,
        end: ':',
        excludeEnd: true,
        starts: {
          endsWithParent: true,
          excludeEnd: true,
          contains: [FUNCTION_LIKE, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
            className: 'number',
            begin: '#[0-9A-Fa-f]+'
          }, {
            className: 'meta',
            begin: '!important'
          }]
        }
      };
      var AT_IDENTIFIER = '@[a-z-]+'; // @font-face

      var AT_MODIFIERS = "and or not only";
      var MEDIA_TYPES = "all print screen speech";
      var AT_PROPERTY_RE = /@\-?\w[\w]*(\-\w+)*/; // @-webkit-keyframes

      var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
      var RULE = {
        begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
        returnBegin: true,
        end: ';',
        endsWithParent: true,
        contains: [ATTRIBUTE]
      };
      return {
        case_insensitive: true,
        illegal: /[=\/|'\$]/,
        contains: [hljs.C_BLOCK_COMMENT_MODE, {
          className: 'selector-id',
          begin: /#[A-Za-z0-9_-]+/
        }, {
          className: 'selector-class',
          begin: /\.[A-Za-z0-9_-]+/
        }, {
          className: 'selector-attr',
          begin: /\[/,
          end: /\]/,
          illegal: '$',
          contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
        }, {
          className: 'selector-pseudo',
          begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, // matching these here allows us to treat them more like regular CSS
        // rules so everything between the {} gets regular rule highlighting,
        // which is what we want for page and font-face
        {
          begin: '@(page|font-face)',
          lexemes: AT_IDENTIFIER,
          keywords: '@page @font-face'
        }, {
          begin: '@',
          end: '[{;]',
          // at_rule eating first "{" is a good thing
          // because it doesn’t let it to be parsed as
          // a rule set but instead drops parser into
          // the default mode which is how it should be.
          illegal: /:/,
          // break on Less variables @var: ...
          returnBegin: true,
          contains: [{
            className: 'keyword',
            begin: AT_PROPERTY_RE
          }, {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: AT_MODIFIERS,
            contains: [{
              begin: /[a-z-]+:/,
              className: "attribute"
            }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE]
          }]
        }, {
          className: 'selector-tag',
          begin: IDENT_RE,
          relevance: 0
        }, {
          begin: '{',
          end: '}',
          illegal: /\S/,
          contains: [hljs.C_BLOCK_COMMENT_MODE, RULE]
        }]
      };
    };
    /***/

  },

  /***/
  "../../node_modules/highlight.js/lib/languages/javascript.js":
  /*!***********************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/highlight.js/lib/languages/javascript.js ***!
    \***********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesJavascriptJs(module, exports) {
    module.exports = function (hljs) {
      var FRAGMENT = {
        begin: '<>',
        end: '</>'
      };
      var XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/
      };
      var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
      var KEYWORDS = {
        keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' + // ECMAScript 6 modules import
        'import from as',
        literal: 'true false null undefined NaN Infinity',
        built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise'
      };
      var NUMBER = {
        className: 'number',
        variants: [{
          begin: '\\b(0[bB][01]+)n?'
        }, {
          begin: '\\b(0[oO][0-7]+)n?'
        }, {
          begin: hljs.C_NUMBER_RE + 'n?'
        }],
        relevance: 0
      };
      var SUBST = {
        className: 'subst',
        begin: '\\$\\{',
        end: '\\}',
        keywords: KEYWORDS,
        contains: [] // defined later

      };
      var HTML_TEMPLATE = {
        begin: 'html`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'xml'
        }
      };
      var CSS_TEMPLATE = {
        begin: 'css`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'css'
        }
      };
      var TEMPLATE_STRING = {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      };
      SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
      var PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);
      return {
        aliases: ['js', 'jsx', 'mjs', 'cjs'],
        keywords: KEYWORDS,
        contains: [{
          className: 'meta',
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        }, {
          className: 'meta',
          begin: /^#!/,
          end: /$/
        }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.COMMENT('/\\*\\*', '\\*/', {
          relevance: 0,
          contains: [{
            className: 'doctag',
            begin: '@[A-Za-z]+',
            contains: [{
              className: 'type',
              begin: '\\{',
              end: '\\}',
              relevance: 0
            }, {
              className: 'variable',
              begin: IDENT_RE + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            }, // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        }), hljs.C_BLOCK_COMMENT_MODE, NUMBER, {
          // object attr container
          begin: /[{,\n]\s*/,
          relevance: 0,
          contains: [{
            begin: IDENT_RE + '\\s*:',
            returnBegin: true,
            relevance: 0,
            contains: [{
              className: 'attr',
              begin: IDENT_RE,
              relevance: 0
            }]
          }]
        }, {
          // "value" container
          begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [{
              className: 'params',
              variants: [{
                begin: IDENT_RE
              }, {
                begin: /\(\s*\)/
              }, {
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: PARAMS_CONTAINS
              }]
            }]
          }, {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true
          }, {
            // JSX
            variants: [{
              begin: FRAGMENT.begin,
              end: FRAGMENT.end
            }, {
              begin: XML_TAG.begin,
              end: XML_TAG.end
            }],
            subLanguage: 'xml',
            contains: [{
              begin: XML_TAG.begin,
              end: XML_TAG.end,
              skip: true,
              contains: ['self']
            }]
          }],
          relevance: 0
        }, {
          className: 'function',
          beginKeywords: 'function',
          end: /\{/,
          excludeEnd: true,
          contains: [hljs.inherit(hljs.TITLE_MODE, {
            begin: IDENT_RE
          }), {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }],
          illegal: /\[|%/
        }, {
          begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`

        }, hljs.METHOD_GUARD, {
          // ES6 class
          className: 'class',
          beginKeywords: 'class',
          end: /[{;=]/,
          excludeEnd: true,
          illegal: /[:"\[\]]/,
          contains: [{
            beginKeywords: 'extends'
          }, hljs.UNDERSCORE_TITLE_MODE]
        }, {
          beginKeywords: 'constructor get set',
          end: /\{/,
          excludeEnd: true
        }],
        illegal: /#(?!!)/
      };
    };
    /***/

  },

  /***/
  "../../node_modules/highlight.js/lib/languages/json.js":
  /*!*****************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/highlight.js/lib/languages/json.js ***!
    \*****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesJsonJs(module, exports) {
    module.exports = function (hljs) {
      var LITERALS = {
        literal: 'true false null'
      };
      var ALLOWED_COMMENTS = [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE];
      var TYPES = [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE];
      var VALUE_CONTAINER = {
        end: ',',
        endsWithParent: true,
        excludeEnd: true,
        contains: TYPES,
        keywords: LITERALS
      };
      var OBJECT = {
        begin: '{',
        end: '}',
        contains: [{
          className: 'attr',
          begin: /"/,
          end: /"/,
          contains: [hljs.BACKSLASH_ESCAPE],
          illegal: '\\n'
        }, hljs.inherit(VALUE_CONTAINER, {
          begin: /:/
        })].concat(ALLOWED_COMMENTS),
        illegal: '\\S'
      };
      var ARRAY = {
        begin: '\\[',
        end: '\\]',
        contains: [hljs.inherit(VALUE_CONTAINER)],
        // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
        illegal: '\\S'
      };
      TYPES.push(OBJECT, ARRAY);
      ALLOWED_COMMENTS.forEach(function (rule) {
        TYPES.push(rule);
      });
      return {
        contains: TYPES,
        keywords: LITERALS,
        illegal: '\\S'
      };
    };
    /***/

  },

  /***/
  "../../node_modules/highlight.js/lib/languages/typescript.js":
  /*!***********************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/highlight.js/lib/languages/typescript.js ***!
    \***********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesTypescriptJs(module, exports) {
    module.exports = function (hljs) {
      var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
      var KEYWORDS = {
        keyword: 'in if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const class public private protected get set super ' + 'static implements enum export import declare type namespace abstract ' + 'as from extends async await',
        literal: 'true false null undefined NaN Infinity',
        built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document any number boolean string void Promise'
      };
      var DECORATOR = {
        className: 'meta',
        begin: '@' + JS_IDENT_RE
      };
      var ARGS = {
        begin: '\\(',
        end: /\)/,
        keywords: KEYWORDS,
        contains: ['self', hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.NUMBER_MODE]
      };
      var PARAMS = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, DECORATOR, ARGS]
      };
      var NUMBER = {
        className: 'number',
        variants: [{
          begin: '\\b(0[bB][01]+)n?'
        }, {
          begin: '\\b(0[oO][0-7]+)n?'
        }, {
          begin: hljs.C_NUMBER_RE + 'n?'
        }],
        relevance: 0
      };
      var SUBST = {
        className: 'subst',
        begin: '\\$\\{',
        end: '\\}',
        keywords: KEYWORDS,
        contains: [] // defined later

      };
      var HTML_TEMPLATE = {
        begin: 'html`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'xml'
        }
      };
      var CSS_TEMPLATE = {
        begin: 'css`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'css'
        }
      };
      var TEMPLATE_STRING = {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      };
      SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
      return {
        aliases: ['ts'],
        keywords: KEYWORDS,
        contains: [{
          className: 'meta',
          begin: /^\s*['"]use strict['"]/
        }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, {
          // "value" container
          begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
            className: 'function',
            begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [{
              className: 'params',
              variants: [{
                begin: hljs.IDENT_RE
              }, {
                begin: /\(\s*\)/
              }, {
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: ['self', hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
              }]
            }]
          }],
          relevance: 0
        }, {
          className: 'function',
          beginKeywords: 'function',
          end: /[\{;]/,
          excludeEnd: true,
          keywords: KEYWORDS,
          contains: ['self', hljs.inherit(hljs.TITLE_MODE, {
            begin: JS_IDENT_RE
          }), PARAMS],
          illegal: /%/,
          relevance: 0 // () => {} is more typical in TypeScript

        }, {
          beginKeywords: 'constructor',
          end: /[\{;]/,
          excludeEnd: true,
          contains: ['self', PARAMS]
        }, {
          // prevent references like module.id from being higlighted as module definitions
          begin: /module\./,
          keywords: {
            built_in: 'module'
          },
          relevance: 0
        }, {
          beginKeywords: 'module',
          end: /\{/,
          excludeEnd: true
        }, {
          beginKeywords: 'interface',
          end: /\{/,
          excludeEnd: true,
          keywords: 'interface extends'
        }, {
          begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`

        }, {
          begin: '\\.' + hljs.IDENT_RE,
          relevance: 0 // hack: prevents detection of keywords after dots

        }, DECORATOR, ARGS]
      };
    };
    /***/

  },

  /***/
  "../../node_modules/highlight.js/lib/languages/xml.js":
  /*!****************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/highlight.js/lib/languages/xml.js ***!
    \****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighlightJsLibLanguagesXmlJs(module, exports) {
    module.exports = function (hljs) {
      var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
      var XML_ENTITIES = {
        className: 'symbol',
        begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'
      };
      var XML_META_KEYWORDS = {
        begin: '\\s',
        contains: [{
          className: 'meta-keyword',
          begin: '#?[a-z_][a-z1-9_-]+',
          illegal: '\\n'
        }]
      };
      var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
        begin: '\\(',
        end: '\\)'
      });
      var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
        className: 'meta-string'
      });
      var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        className: 'meta-string'
      });
      var TAG_INTERNALS = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: 'attr',
          begin: XML_IDENT_RE,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: 'string',
            endsParent: true,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [XML_ENTITIES]
            }, {
              begin: /'/,
              end: /'/,
              contains: [XML_ENTITIES]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
      return {
        aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
        case_insensitive: true,
        contains: [{
          className: 'meta',
          begin: '<![a-z]',
          end: '>',
          relevance: 10,
          contains: [XML_META_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE, XML_META_PAR_KEYWORDS, {
            begin: '\\[',
            end: '\\]',
            contains: [{
              className: 'meta',
              begin: '<![a-z]',
              end: '>',
              contains: [XML_META_KEYWORDS, XML_META_PAR_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE]
            }]
          }]
        }, hljs.COMMENT('<!--', '-->', {
          relevance: 10
        }), {
          begin: '<\\!\\[CDATA\\[',
          end: '\\]\\]>',
          relevance: 10
        }, XML_ENTITIES, {
          className: 'meta',
          begin: /<\?xml/,
          end: /\?>/,
          relevance: 10
        }, {
          begin: /<\?(php)?/,
          end: /\?>/,
          subLanguage: 'php',
          contains: [// We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {
            begin: '/\\*',
            end: '\\*/',
            skip: true
          }, {
            begin: 'b"',
            end: '"',
            skip: true
          }, {
            begin: 'b\'',
            end: '\'',
            skip: true
          }, hljs.inherit(hljs.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: true
          }), hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: true
          })]
        }, {
          className: 'tag',

          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending braket. The '$' is needed for the lexeme to be recognized
          by hljs.subMode() that tests lexemes outside the stream.
          */
          begin: '<style(?=\\s|>)',
          end: '>',
          keywords: {
            name: 'style'
          },
          contains: [TAG_INTERNALS],
          starts: {
            end: '</style>',
            returnEnd: true,
            subLanguage: ['css', 'xml']
          }
        }, {
          className: 'tag',
          // See the comment in the <style tag about the lookahead pattern
          begin: '<script(?=\\s|>)',
          end: '>',
          keywords: {
            name: 'script'
          },
          contains: [TAG_INTERNALS],
          starts: {
            end: '\<\/script\>',
            returnEnd: true,
            subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
          }
        }, {
          className: 'tag',
          begin: '</?',
          end: '/?>',
          contains: [{
            className: 'name',
            begin: /[^\/><\s]+/,
            relevance: 0
          }, TAG_INTERNALS]
        }]
      };
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map