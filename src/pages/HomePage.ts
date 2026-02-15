import{Page,Locator} from "@playwright/test"

export class HomePage {

     private readonly page: Page;
    
    // Locators
    private readonly lnkNewLead: Locator;
    private readonly lnkLeads: Locator;
    private readonly lnkLogout: Locator;
    private readonly lnkHome: Locator;
   
    
    constructor(page: Page) {
        this.page = page;
        this.lnkNewLead = page.locator("//a[text()='New Lead']");
        this.lnkLeads = page.locator("//a[text()='Leads']");
        this.lnkLogout = page.locator("//a[text()='Logout']");
        this.lnkHome = page.locator("//a[text()='Home']");
      
    }


  

    

   
    async clickLeads(){
        await this.lnkLeads.click();
    }

    async clickLogout(){
        await this.lnkLogout.click();
    }

    async clickNewLead(){
        await this.lnkNewLead.click();
    }

     async validateHome():Promise<null | boolean>{
       
        return await this.lnkHome.isVisible()
    }

    async validateLogout():Promise<null | boolean>{
       
        return await this.lnkLogout.isVisible()
    }
    

}    