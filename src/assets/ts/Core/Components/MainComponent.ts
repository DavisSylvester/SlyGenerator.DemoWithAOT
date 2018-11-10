import { Component, OnInit, AfterViewInit } from "@angular/core";




@Component({
    selector: "main-app",
    moduleId: module.id,    
    templateUrl: "../html/index.html",
    styles: [ "../html/styles.css"],    
    providers: []
})




export class MainComponent implements OnInit, AfterViewInit {


    public Title = "Main Component Title";



    constructor() {


        console.log("Starting Main Component");
        

    }

    public ngOnInit(): void {
       

        

    }

    public ngAfterViewInit(): void {




    }



    
    

}
