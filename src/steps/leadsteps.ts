 import { Given, When, Then } from '@cucumber/cucumber';
 import { Browser,Page,chromium,expect } from '@playwright/test';
 import { LoginPage } from '../pages/LoginPage';
 import { HomePage } from '../pages/HomePage';
  import { LeadPage } from '../pages/LeadPage';

 let browser: Browser;
 let page: Page;    
 let loginPage: LoginPage;
 let homePage: HomePage;
  let leadPage: LeadPage;

  let test1 : string;


 





When('user enters click on new lead link',async function () {
    
    homePage = new  HomePage(this.page);      
    await homePage.clickNewLead();   
    leadPage = new LeadPage(this.page);     

         });          
         
Then('fill the mandatory fields and click on save button', async function () {
        
         await leadPage.createlead("Modi","BJP");
         });     

Then('lead should be created successfully', async function () {
        
         await leadPage.verifyLead();
         });           
         

