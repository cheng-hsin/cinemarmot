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

export default function Parent() {
  const [data, setData] = useState('Hello World');

  const updateData = (data) => {
    setData(data);
  }

  return (
    <div>
      <h1>{data}</h1>
      <Child updateData={updateData} />
    </div>
  );
}
```

Child.js
```js
import React, { Component } from 'react';

export default function Child({ updateData }) {
 
    return (
        <div>
            <button onClick={updateData}>Update Data</button>
        </div>
    );
}
```

# BigInt in prisma is not supported
If you are using BigInt in prisma, please change it to Int.