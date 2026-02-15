 import { Given, When, Then } from '@cucumber/cucumber';
 import { Browser,Page,chromium,expect } from '@playwright/test';
 import { LoginPage } from '../pages/LoginPage';
 import { HomePage } from '../pages/HomePage';

 let browser: Browser;
 let page: Page;    
 let loginPage: LoginPage;
 let homePage: HomePage;


 
 Given('user is on login page', async function () {
          
   
    await this.page.goto('http:localhost:100');
    loginPage = new LoginPage(this.page);
    homePage = new HomePage(this.page);

         });

When('user enters valid credentials username and password and clicks on login button',async function () {
         await loginPage.login('admin','admin');        

         }); 

When('user enters invalid username and password and clicks on login button',async function () {
         await loginPage.login('admin123','admin3532656');        

         });          
         
Then('user should see login page', async function () {
        
         await loginPage.validateLogo();
         });     

Then('user should see error message', async function () {
        
         await loginPage.getloginErrorMessage();
         });           
         
Then('user should see home page', async function () {
        // await expect(page.locator("//a[text()='Home']")).toBeVisible();
         await homePage.validateHome();
         });         
         
Then('user should see logout link', async function () {
      // await expect(page.locator("//a[text()='Logout']")).toBeVisible();
       await homePage.validateLogout();
       await homePage.clickLogout();
       //await page.locator("//a[text()='Logout']").click();
     
         });         

