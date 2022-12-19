# disabled seat
If you want to add disabled seats to your map, you can do so by adding the `disabled` attribute to the `seat` element. 

disabled property is a boolean value, so you can set a condition to disable a seat. 

For example:
```js
<seat id="seat1" disabled={array.include(value)}>A1</seat>
```
# Deploy T3-App to Vercel : [Link](https://create.t3.gg/en/deployment/vercel)
1. Login vercel with your gitlab account and import your project.
2. Add a `vercel.json` file to your project root directory. 
    ```json
    {}
    ```
3. If you are using typescript, you have to make sure that all the type of your project is correct.
4. Add environment variables to your project. You can import the .env file to your project directly.
5. Don't forget to change database url to your remote database url.