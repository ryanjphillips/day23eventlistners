function generateNumbs(userInput){

    const getList = document.querySelector("ul");
    getList.style.listStyle = "none";

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

        if (isPrime(item)){

            listItem.style.backgroundColor = "#F26B5E";
        }else if(item % 2 === 1){

            listItem.style.backgroundColor = "#F2CD5C";
        }else{
            
            listItem.style.backgroundColor = "#7EBF8E";
        }
        
        getList.appendChild(listItem);
    }
}