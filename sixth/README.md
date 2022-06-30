## Install

npm install styled-components --save-dev  
npm install @types/styled-components jest-styled-components --save-dev  
npm install lint-staged prettier --save-dev  

## .prettierrc.js 수정

```javascript
module.exports = {
	jsxBracketSameLine: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 100
}
```

## package.json 수정

```make
"scripts": {
	-
},
"husky": {
	"hooks": {
		"pre-commit": "lint-staged"
	}
},
"lint-staged": {
	"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
		"prettier --write"
	]
}
```

## tsconfig.json 수정

```make
{
	"compilerOptions": {
		~~~,
		"jsx": "react-jsx",
		"baseUrl": "src"
	}
}
```
