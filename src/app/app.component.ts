import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'tablefilter';
  public studentData :any;
  public newSearch = [];
  public searchResult =[];
  oldvalue:any = [];
  searchText :any;
  public prevSearch : any;
  public nextSearch :any ;

  ngOnInit(){
  	this.studentData = [
	  	 {"Name": 'Ram', "Rol_no" :20, "Subject":'Bengali', "Class":'v', "Total_no":49 },
	  	 {"Name": 'Sam', "Rol_no" :10, "Subject":'English', "Class":'vi', "Total_no":40 },
	  	 {"Name": 'Raju', "Rol_no" :2, "Subject":'Math', "Class":'x', "Total_no":25 },
	  	 {"Name": 'Akash', "Rol_no" :22, "Subject":'Pol Science', "Class":'xii', "Total_no":32 },
	  	 {"Name": 'Biplab', "Rol_no" :120, "Subject":'Philoshopy', "Class":'vii', "Total_no":49 },
	  	 {"Name": 'Prasenjit', "Rol_no" :32, "Subject":'Computer', "Class":'ix', "Total_no":33 },
	  	 {"Name": 'Tubai hi', "Rol_no" :202, "Subject":'History', "Class":'vii', "Total_no":32 },
	  	 {"Name": 'Rakesh Bhunia', "Rol_no" :2, "Subject":'History', "Class":'viii', "Total_no":432 },
  	]
  	
  	//console.log("studentData"+this.studentData)
  	this.newSearch=this.studentData;
  	this.oldvalue=this.studentData;
  	//console.log("20"+this.newSearch)
  	
  }
  applyFilter(userSearch){
  	this.studentData = this.oldvalue;
  	//console.log(userSearch.trim().length)
  	if(userSearch.trim().length>0){
  		//console.log("test"+userSearch);
	  	this.newSearch = userSearch.trim();
	  	
	  	this.searchResult =[];

	  		//console.log(this.newSearch)  		
	  		for (var i = 0;  i<this.studentData.length; i++) {
	  			var name = this.studentData[i].Name.toLowerCase();
	  			var subject = this.studentData[i].Subject.toLowerCase();
	  			var rolno =this.studentData[i].Rol_no.toString();
	  			var classnam =this.studentData[i].Class.toLowerCase();
	  			var totalno = this.studentData[i].Total_no.toString();
	  			//console.log(typeof totalno)
	  			//console.log(name.indexOf(this.newSearch));

	  			if(name.indexOf(this.newSearch) != -1
	  			 || subject.indexOf(this.newSearch) != -1 
	  				|| rolno.indexOf(this.newSearch) != -1
	  				 || totalno.indexOf(this.newSearch) != -1 
	  				 || classnam.indexOf(this.newSearch) != -1) {
	  				//console.log(this.studentData[i])
	  				this.searchResult.push(this.studentData[i])
	  				// console.log(this.prevSearch)
	  				// this.prevSearch.push(this.studentData[i])
	  			}else{
	  				//console.log(this.studentData[i])
	  			}
	  			//this.searchResult.push(this.studentData[i])
	  		}
	  		//console.log(this.searchResult)
	  		this.studentData = this.searchResult;	
	}
  }

}
