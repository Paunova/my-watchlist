## Code Guide

### Imports

 - *Import types organized per file, row separated*

	- external libraries

	- internal components

	- helpers & utils

	- globals & constants

	- styles

- *Group by directory, create an index file and export all files*

  ```javascript
  import {one, two} from './directory';
  ```
  ```javascript
  import one from './directory/one.js';
  import {two} from './directory/two.js';
  ```