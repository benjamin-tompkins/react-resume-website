module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react", 'import'
    ],
    "rules": {
        "import/order": [2, {
            "groups": [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index"],
            }
        ],
        "react/jsx-sort-props": [2, {
            "callbacksLast": false,
            "ignoreCase": true,
            "locale": "auto",
            "multiline": "ignore",
            "noSortAlphabetically": false,
            "reservedFirst": false,
            "shorthandFirst": true,
            "shorthandLast": false,
        }],
        "react/jsx-tag-spacing": [2, {
            "afterOpening": "never",
            "beforeClosing": "allow",
            "beforeSelfClosing": "always",
            "closingSlash": "never",
        }],
        "react/sort-prop-types": [2, {
            "callbacksLast": true,
            "ignoreCase": true,
            "noSortAlphabetically": false,
            "requiredFirst": false,
            "sortShapeProp": true,
            }
        ],
        "sort-keys": ["error", "asc", {"caseSensitive": true, "minKeys": 2, "natural": true}],
        
    }
}
