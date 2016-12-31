import { HumanModule } from './human.module';
import { HumanService } from './../services/human.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'human',
    templateUrl: 'human.component.html',
    styleUrls: ['human.component.css'],
    providers: [ HumanService ]
})
export class HumanComponent implements OnInit {
    name: string;
    age: number;
    humans: Array<any>;
    viewedHuman: any;

    constructor(private humanService: HumanService) {
//        this.name = "Create a human with angular 2!";
    }

    ngOnInit() {
        this.humanService.getHumans().subscribe(res => {
            this.humans = res;
            console.log("ngOnInit(): " + this.humans);
        });
    }    

    addHuman() {
        var human = {
            name: this.name,
            age: this.age
        }
        //console.log(human);
        this.humanService.addHuman(human).subscribe(data => {
            this.humans.push(data);
            console.log('success addHuman: ' + JSON.stringify(data));
        });
    }
    
    viewHuman(id: any) {
        console.log('view human: ' + id);
        this.humanService.getHuman(id).subscribe(data  => {
            console.log('success viewHuman: ' + JSON.stringify(data));
            this.viewedHuman = data[0];
        });
    }


    removeHuman(id: any) {
        console.log('delete human: ' + id);
        this.humanService.removeHuman(id).subscribe(data  => {
            console.log('success removeHuman: ' + data);
            for (var index = 0; index < this.humans.length; index++) {
                if(this.humans[index]._id == id) {
                    console.log('delete human locally: ' + index + ' ' + id);
                    this.humans.splice(index, 1);
                    return;
                }
            }
        });
    }
}
