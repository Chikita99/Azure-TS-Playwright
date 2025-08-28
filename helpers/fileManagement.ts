import { Page } from '@playwright/test';


export class FileManagement {
    
    constructor (public page: Page) {}

    public clearDownloadFolder() {
        const path = require('path');
        const fs = require('fs');
        const downloadDir = '/download'; // example, path.join(__dirname, 'download')
        if (fs.existsSync(downloadDir)) {
        
        const files = fs.readdirSync(downloadDir);
        files.forEach((file: any) => {
            const filePath = path.join(downloadDir, file);
            if (fs.statSync(filePath).isFile()) { 
                fs.unlinkSync(filePath);
                console.log(`Deleted file: ${filePath}`);
            }
        });
        console.log('All files in /download have been deleted.');
    } else {
        console.log('Directory /download does not exist.');
    }
}

}
