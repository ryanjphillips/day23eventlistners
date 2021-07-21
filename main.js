function main(){

    //Select Items
    const button = document.querySelector("button");
    const headingThree = document.querySelector("h3");

    //Create Items
    const para = document.createElement("p");

    // Button Action
    button.addEventListener("click", () => {

        const getInputText = parseInt(document.querySelector("input").value);

        if(getInputText && getInputText < 1000){

            para.textContent = "";
            const list = document.querySelector("ul")
            list.innerHTML = "";
            generateNumbs(getInputText);
        }
        else if(getInputText >= 1000){

            para.textContent = "Please enter a number less than a thousand!";
            para.style.color = "#F26B5E";
            headingThree.appendChild(para);
        }
        else{

            para.textContent = "Please Enter a number!";
            para.style.color = "#F26B5E";
            headingThree.appendChild(para);
        }
    })
}

main();