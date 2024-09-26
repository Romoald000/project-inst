1. `useAccess` restrict from **/profile**. Create `<DefaultPage/>` and registre appropriate route in `router.js` in bottom of jsx components list.
2. Add ability to extend App.js with children.
3. Move <BrowserRouter> to <RouterPages> (from `App.js` to `router.js`);
4. Remove password from user object contains in redux storage (**handleLogin** in `LoginPage.jsx`);
5. Retrieve user profile information using `useSelector` and send request by url: **CONFIG.BACK +'/userInfo?id=' + currentUser.id**
