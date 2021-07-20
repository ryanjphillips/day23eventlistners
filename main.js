function main(){

    //Select Items
    const button = document.querySelector("button");
    const headingThree = document.querySelector("h3");
    const para = document.createElement("p");

    // Button Function
    button.addEventListener("click", () => {
        const getInputText = parseInt(document.querySelector("input").value);    
        if(getInputText){
            para.textContent = ""
            generateNumbs(getInputText);

        }else{
            para.textContent = "Please Enter a number!"
            para.style.color = "red";
            headingThree.appendChild(para);
        }
    })
}

function generateNumbs(userInput){

    // Delete any Existing List
    const list = document.querySelector("ul")
    list.innerHTML = "";


    for(let item = 0; item < userInput; item++){

        //Create List Item
        const listItem = document.createElement("li");
        listItem.textContent = item;

        //Item Style
        listItem.style.display = "inline-block";
        listItem.style.margin = "10px";
        listItem.style.color = "white";
        listItem.style.minHeight = "100px";
        listItem.style.minWidth = "200px";
        listItem.style.textAlign = "center";
        listItem.style.fontSize = "45px";
        listItem.style.padding = "50px 0px 0px 0px";

        if (((item % 5 === 1 || item === 5 || item === 2) || (item % 3 === 1 || item === 3) && (item % 2  === 1 || item === 2)) && (item !== 1 && item !==6)){
            listItem.style.backgroundColor = "#F26B5E";
        }else if(item % 2 === 1){
            listItem.style.backgroundColor = "#F2CD5C";
        }else{
            listItem.style.backgroundColor = "#7EBF8E";
        }
        
        //Append and Display List Item
        const getList = document.querySelector("ul");
        getList.style.listStyle = "none";
        getList.appendChild(listItem);

    }
}

main();