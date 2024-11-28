//@eslint-disable
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import vue from "eslint-plugin-vue";
import globals from "globals";
import parser from "vue-eslint-parser";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules",
        "**/dist",
        "public/js",
        "**/.eslintrc.js",
        "**/vite.config.js",
        "**/babel.config.js",
        "**/eslint.config.mjs"
    ],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        vue,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: parser,
        ecmaVersion: 6,
        sourceType: "module",

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".vue"],
            project: "tsconfig.json",

            ecmaFeatures: {
                modules: true,
            },
        },
    },

    rules: {
        "accesor-pairs": 0,
        "no-var": 1,
        "prefer-spread": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/no-base-to-string": 1,
        "@typescript-eslint/no-confusing-non-null-assertion": 1,
        "@typescript-eslint/no-non-null-asserted-optional-chain": 1,
        "@typescript-eslint/no-misused-promises": 1,
        "@typescript-eslint/no-floating-promises": 1,
        "@typescript-eslint/no-extra-non-null-assertion": 1,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-inferrable-types": 0,

        "vue/html-quotes": [1, "double", {
            avoidEscape: true,
        }],

        "no-duplicate-imports": 0,
        "vue/no-v-html": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/prefer-optional-chain": 1,
        "@typescript-eslint/prefer-readonly": 1,
        "@typescript-eslint/prefer-includes": 1,
        "@typescript-eslint/prefer-regexp-exec": 1,
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": 1,
        "@typescript-eslint/prefer-string-starts-ends-with": 1,

        // "@typescript-eslint/type-annotation-spacing": [1, {
        //     before: false,
        //     after: false,

        //     overrides: {
        //         arrow: {
        //             before: true,
        //             after: true,
        //         },
        //     },
        // }],

        "@typescript-eslint/ban-ts-comment": 0,
        "@/semi": [1, "always"],

        "@typescript-eslint/no-unused-expressions": [1, {
            allowShortCircuit: true,
        }],

        "@typescript-eslint/consistent-type-assertions": 1,
        "@typescript-eslint/no-use-before-define": 1,

        "@typescript-eslint/explicit-module-boundary-types": [1, {
            allowArgumentsExplicitlyTypedAsAny: true,
        }],

        indent: [1, 2, {
            flatTernaryExpressions: true,
            VariableDeclarator: "first",
        }],

        "@typescript-eslint/no-unused-vars": [1, {
            varsIgnorePattern: "^_",
        }],

        "@typescript-eslint/no-useless-constructor": 0,
        "@typescript-eslint/switch-exhaustiveness-check": 1,
        "@/quotes": [1, "single"],
        "no-empty": 1,
        "no-useless-escape": 1,
        "no-param-reassign": 1,
        "no-useless-return": 1,
        "@/no-extra-semi": 1,

        "semi-spacing": [1, {
            before: false,
            after: true,
        }],

        "no-multiple-empty-lines": 1,
        "no-multi-spaces": 1,
        "space-before-function-paren": [1, "never"],
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/require-await": 0,
        "array-bracket-spacing": 1,
        "object-curly-spacing": 1,
        "computed-property-spacing": 1,
        "space-in-parens": 1,
        "dot-location": 1,
        "@typescript-eslint/dot-notation": 1,
        "getter-return": 2,
        "for-direction": 2,
        "no-empty-character-class": 1,
        "no-duplicate-case": "error",
        "no-dupe-keys": 2,
        "no-dupe-else-if": 2,
        "no-cond-assign": 1,
        "no-compare-neg-zero": 2,
        "space-unary-ops": 1,
        "comma-style": 1,
        "@/keyword-spacing": 1,
        "no-obj-calls": 1,
        "no-invalid-regexp": 2,
        "no-misleading-character-class": 2,
        "no-setter-return": 1,
        "no-extra-boolean-cast": 1,
        "array-callback-return": 2,
        "accessor-pairs": 0,
        "block-scoped-var": 1,
        eqeqeq: 1,
        "@typescript-eslint/class-literal-property-style": 1,
        "@typescript-eslint/no-empty-object-type": [1, {allowInterfaces: 'with-single-extends'}],
        "no-extra-label": 1,
        "no-eq-null": 1,
        "@typescript-eslint/no-empty-function": 1,
        "no-else-return": 1,
        "no-constructor-return": 2,
        "no-constant-condition": 1,
        "guard-for-in": 1,
        "no-loop-func": 1,
        "@typescript-eslint/array-type": 1,
        "@typescript-eslint/await-thenable": 1,
        "no-lone-blocks": 1,
        "@typescript-eslint/no-invalid-this": 1,
        "wrap-iife": 1,
        radix: 1,
        "prefer-regex-literals": 1,
        "no-useless-concat": 1,
        "no-throw-literal": 2,
        "no-new-func": 1,
        "no-new-wrappers": 1,
        "no-multi-str": 1,
        "no-unmodified-loop-condition": 1,
        "no-shadow": 1,
        "arrow-spacing": 1,
        "no-confusing-arrow": 1,
        "symbol-description": 1,
        "prefer-template": 1,
        "@typescript-eslint/return-await": 1,

        "prefer-const": [1, {
            ignoreReadBeforeAssign: true,
            destructuring: "all",
        }],

        "no-trailing-spaces": [1, {
            ignoreComments: true,
        }],

        "prefer-arrow-callback": 1,
        "no-useless-rename": 1,
        "no-useless-computed-key": 1,
        "template-curly-spacing": 1,

        "switch-colon-spacing": ["error", {
            after: true,
            before: false,
        }],

        "comma-dangle": 1,
        "operator-linebreak": [1, "after"],
        "implicit-arrow-linebreak": 1,
        "new-parens": 1,
        "no-lonely-if": 1,
        "function-paren-newline": [1, "multiline-arguments"],
        "block-spacing": [1, "never"],
        "no-unneeded-ternary": 1,
        "no-whitespace-before-property": 1,
        "operator-assignment": 1,

        "vue/max-attributes-per-line": ["warn", {
            singleline: {
                max: 3,
            },

            multiline: {
                max: 3,
            },
        }],

        // "@typescript-eslint/ban-types": ["error", {
        //     types: {
        //         "{}": false,
        //     },

        //     extendDefaults: true,
        // }],

        "vue/multiline-html-element-content-newline": 0,
        "no-undef": 0,
        "vue/singleline-html-element-content-newline": 0,

        "vue/html-closing-bracket-newline": ["error", {
            singleline: "never",
            multiline: "never",
        }],

        "no-prototype-builtins": 0,

        "lines-between-class-members": [1, "always", {
            exceptAfterSingleLine: true,
        }],
    },
}];