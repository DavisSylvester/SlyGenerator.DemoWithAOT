import { Component, OnInit, AfterViewInit } from "@angular/core";



@Component({
    selector: "main-app",    
    template: require("../html/index.html"),
    styles: [require("../html/styles.css")],
    
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
