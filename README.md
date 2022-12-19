# disabled seat
If you want to add disabled seats to your map, you can do so by adding the `disabled` attribute to the `seat` element. 

disabled property is a boolean value, so you can set a condition to disable a seat. 

For example:
```js
<seat id="seat1" disabled={array.include(value)}>A1</seat>
```