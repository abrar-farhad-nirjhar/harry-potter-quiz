class UI{
    constructor(){
        this.area = document.getElementById('option')
        this.display = ''
    }

    CreateOptions(data){
        let self = this
        data.forEach(element => {
            
            console.log(element.id)
            self.display += `
                <div class="ui attached segment little-style" style="font-size:25px" id="${element.id}">${element.option}</div>
            
            `
            
        });

        
        this.area.innerHTML = this.display
    }


}