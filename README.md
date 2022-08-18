# react-npm-publish

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

This repo is the example of the article ["How to create and publish React Typescript npm package with demo and automated build"]

You can clone it and step by step create your own NPM package and publish it.

It is simple React counter.

[**Live Demo**](https://gapon2401.github.io/bit-react-npm-publish
/)

## Installation:

```bash
npm install bit-react-npm-publish
 --save-dev
```

or

```bash
yarn add -D bit-react-npm-publish

```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter, getHotels } from 'bit-react-npm-publish'

const MyApp = (id) => {
  const data = getHotels(id)

  return (
    <div>
      <MyCounter />
    </div>
  )
}

export default MyApp
```

[npm-url]: https://www.npmjs.com/package/bit-react-npm-publish
[npm-image]: https://img.shields.io/npm/v/bit-react-npm-publish
[github-license]: https://img.shields.io/github/license/asadul44/react-npm-publish
[github-license-url]: https://github.com/asadul44/my-react-typescript-package/blob/master/LICENSE
[github-build]: https://github.com/asadul44/react-npm-publish/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/asadul44/react-npm-publish/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-npm-publish
