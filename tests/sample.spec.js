const { test, expect } = require('@playwright/test');

test.beforeAll( async () =>{
  

})

test.beforeEach( async ({page}) =>{
  await page.goto("/client/");

})

test('Sample Test', async ({page}) => {
 
    await expect(page).toHaveTitle('Let\'s Shop');
  });