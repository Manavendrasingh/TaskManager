let add = document.querySelector("#add");
let del = document.querySelector("#delete");
let home = document.querySelector(".home");
let colorBar = document.querySelector(".colorBar");

let viewAll = document.querySelector("#view");



let globalDataStorage = [];
add.addEventListener("click", (event) => { /// event listener 
    del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id = "delete" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg></div>';
    del.removeEventListener("click",handleDelete,true);
    

    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.style.border = "5px solid black";
    popup.innerHTML = `<textarea class = "text"></textarea><div class="popupfooter"><div class="red"></div> <div class="yellow"></div><div class="green"></div><div class="blue"></div></div>`
    home.appendChild(popup);

    let footer = document.querySelector(".popupfooter");
    footer.addEventListener("click", (event) => {
        if (event.target !== event.currentTarget) {

            let textValue = document.querySelector(".text");

            let divContent = document.createElement("div");// create content div 
            divContent.classList.add("content");


            let showText = document.createElement("textarea");// text area
            if (event.target.className === "red") showText.classList.add("ticketTextColorRed");
            if (event.target.className === "yellow") showText.classList.add("ticketTextColorYellow");
            if (event.target.className === "green") showText.classList.add("ticketTextColorGreen");
            if (event.target.className === "blue")showText.classList.add("ticketTextColorBlue");
            showText.value = textValue.value;
            showText.style.zIndex = 2;
            showText.disabled = true;

            let overLap = document.createElement("div");
            overLap.id = "overlay"; 
             overLap.style.zIndex = 3;

            let divLock = document.createElement("div");
            divLock.classList.add("lock");
            divLock.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM7 11V13H9V11H7ZM7 14V16H9V14H7ZM7 17V19H9V17H7Z"></path></svg>'
            divLock.addEventListener("click", (event) => {
                if (showText.style.zIndex == 2) {
                    divLock.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM10 15V17H14V15H10Z"></path></svg>'
                    showText.style.zIndex = 3;
                    overLap.style.zIndex = 2;
                    showText.disabled = false;
                }
                else{
                    divLock.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM7 11V13H9V11H7ZM7 14V16H9V14H7ZM7 17V19H9V17H7Z"></path></svg>'
                    showText.style.zIndex = 2;
                    overLap.style.zIndex = 3;
                    showText.disabled = true;  
                }


            })

            

            
            divContent.appendChild(showText);
            divContent.appendChild(divLock);
            divContent.appendChild(overLap);
            globalDataStorage.push(divContent);
            home.appendChild(divContent);




        }
        home.removeChild(popup);

    })
     
})



const handleDelete = ()=>{ 
    del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id = "delete" viewBox="0 0 24 24" fill="red"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg></div>';
    let home = document.querySelector(".home");
     home.addEventListener("dblclick",(event)=>{
        if(home.children.length !== 0 && event.target !== event.currentTarget){ home.removeChild(event.target.parentElement)};
        globalDataStorage = [...home.children];
       
    })
      
}
del.addEventListener("click",handleDelete);


colorBar.addEventListener("click",(event)=>{
    del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id = "delete" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg></div>';
    del.removeEventListener("click",handleDelete,true);

    home.innerHTML="";
       
     for(cont of globalDataStorage )
        {

            
                    if( event.target.className === "red"  && cont.childNodes[0].className === "ticketTextColorRed")
                        {
                              
                              home.appendChild(cont);
                        }
                    else if(event.target.className === "green" && cont.childNodes[0].className === "ticketTextColorGreen")
                            {
                                 
                                  home.appendChild(cont);
                            }
                    else  if( event.target.className === "yellow" &&  cont.childNodes[0].className === "ticketTextColorYellow")
                                {
                                      
                                    
                                    home.appendChild(cont);
                                }
                    else if(event.target.className === "blue" &&   cont.childNodes[0].className === "ticketTextColorBlue")
                                {
                                          
                                    
                                    home.appendChild(cont);
                                }             
                   
                
        }


})

viewAll.addEventListener("click",(event)=>{
    del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id = "delete" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg></div>';
    del.removeEventListener("click",handleDelete,true);
    globalDataStorage.forEach((content)=>{
        home.appendChild(content);
    })
})











