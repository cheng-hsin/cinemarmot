# Pass data from Child to Parent : [Youtube Link](https://www.youtube.com/watch?v=4J00e1tkCCM)
> In React, we can pass data from child to parent using props. 

You have to: 
1. pass a function as a prop to the child component.
2. Call that function from the child component. 
3. The function will be called with the data as an argument.

The parent component will receive the data as an argument in the function.

Here is a simple example:

Parent.js
```js
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Hello World'
    }
  }

  render() {
    return (
      <div>
        <Child data={this.state.data} />
      </div>
    );
  }
}

export default Parent;
```

Child.js
```js
import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Hello World'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

export default Child;
```