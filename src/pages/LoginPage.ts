import{Page,Locator} from "@playwright/test"

export class LoginPage {

     private readonly page: Page;
    
    // Locators
    private readonly imgLogo: Locator;
    private readonly txtuserid: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMessage: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.imgLogo = page.locator("//img[@src='include/images/vtiger-crm.gif']");
        this.txtuserid = page.locator("//input[@name='user_name']");
        this.txtPassword = page.locator("//input[@name='user_password']");
        this.btnLogin = page.locator("//input[@name='Login']");
        this.txtErrorMessage = page.locator("//*[contains(text(),'You must specify a valid username and password.')]");
    }


    async login(userid: string, password: string){
        await this.setUserId(userid);
        await this.setPassword(password);
        await this.clickLogin();
    }

     async setUserId(userid: string){
        await this.txtuserid.fill(userid);
    }

   
    async setPassword(pwd: string) {
        await this.txtPassword.fill(pwd);
    }

   
    async clickLogin(){
        await this.btnLogin.click();
    }

 
    async getloginErrorMessage():Promise<null | boolean>{
       
        return await this.txtErrorMessage.isVisible()
    }

    async validateLogo():Promise<null | boolean>{
       
        return await this.imgLogo.isVisible()
    }
    

}    