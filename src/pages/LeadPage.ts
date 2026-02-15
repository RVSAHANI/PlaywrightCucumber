import{Page,Locator} from "@playwright/test"

export class LeadPage {

     private readonly page: Page;
    
    // Locators
    
    private readonly txtlastname: Locator;
    private readonly txtcompany: Locator;
    private readonly btnSave: Locator;
    private readonly lblLastname: Locator;
    
    
    constructor(page: Page) {
        this.page = page;
       
        this.txtlastname = page.locator("//input[@name='lastname']");
        this.txtcompany = page.locator("//input[@name='company']");
        this.btnSave = page.locator("//input[@name='button']");
        this.lblLastname = page.locator("//td[text()='Last Name:']/following::td[text()='Modi']");
       
    }


    async createlead(lname: string, comp: string){
        await this.setLastName(lname);
        await this.setCompany(comp);
        await this.clickSave();
    }

     async setLastName(lname: string){
        await this.txtlastname.fill(lname);
    }

   
    async setCompany(comp: string) {
        await this.txtcompany.fill(comp);
    }

   
    async clickSave(){
        await this.btnSave.first().click();
    }

    async verifyLead(){
        await this.lblLastname.isVisible();
    }



 
}    