# Blogger JS

`This module is not complete. Feel free to send pull request`

Blogger JS is a javascript client library for blogger CMS. You can get posts,pages and more from your blogger site by this module.

## Install

with `npm` installed, run

```sh
npm install blogger-js --save
```

or with `yarn` installed, run

```sh
yarn add blogger-js
```

## Initialization

Now import and initialize this library from your project

```js
import bloggerJs from "blogger-js";

const blogger = new bloggerJs(API_KEY, BLOGGER_ID);
```

## getBlog

Now, for getting blog informaation, use `getBlog` method,

```js
const blog = await blogger.getBlog();
```

## getBlogById

You can get blog information with website url using `getBlogByUrl` method

```js
const blog = await blogger.getBlogByUrl("htttps://example.blogspot.com/");
```

## getPostList

For getting all the post list, use `getPostList` method

```js
const posts = await blogger.getPostList();
```

## getPostById

For getting a single post by it's id, try the `getPostById` method

```js
const post = await blogger.getPostById(POST_ID);
```

## searchPost

For searching a post with query string, use the `searchPost` method with the query string as argument

```js
const result = await blogger.searchPost(QUERY_STRING);
```

## getPostByPath

```js
const result = await blogger.getPostByPath(POST_PATH);
```

## getPageList

```js
const result = await blogger.getPageList();
```

## getPageById

```js
const result = await blogger.getPageById(PAGE_ID);
```

MIT
