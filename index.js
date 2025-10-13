
        let inpt = document.getElementById('inpt');
        let btn = document.getElementById('btn');
        let op = document.getElementById('op')

        let wear = [];
        btn.addEventListener('click',()=>{
            wear.push(inpt.value);
            fucon(inpt.value);
            inpt.value ='';
            
        });
        function fucon(yer){
            let par = document.createElement('p')
            let click = document.createElement('button')

            par.innerText = yer + '';
            click.innerText = "X";
            par.appendChild(click)
            op.appendChild(par);
            par.classList.add("para");
            click.classList.add("clk");
             
             par.addEventListener('click',()=>{
                par.style.textDecoration ="line-through"
             })

            click.addEventListener('dblclick',()=>{
                op.removeChild(par)
            })
        };
    