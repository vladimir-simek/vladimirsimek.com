let num = 1
let result = 0
let sum = 0
let weightSum = 0+0
let generateNewCol = function () {
    let div = document.createElement("div")
    div.className = "row"
    div.id = "row" + num;
    let wtf = document.createTextNode("")
    div.appendChild(wtf)
    document.getElementById("rowsDiv").appendChild(div)

    let innerDiv = document.createElement("div")
    innerDiv.className = "realRow"
    innerDiv.id = "realRow" + num
    innerDiv.appendChild(wtf)
    document.getElementById("row" + num).appendChild(innerDiv);

    let inputName = document.createElement("a")
    let ftw = document.createTextNode("Input your grade and weight:")
    inputName.appendChild(ftw)
    document.getElementById("realRow" + num).appendChild(inputName)

    let gradeInput = document.createElement("input")
    gradeInput.type = "number"
    gradeInput.className = "inputNumber"
    gradeInput.id = "grade" + num
    gradeInput.placeholder = "Grade"
    gradeInput.appendChild(wtf)
    document.getElementById("realRow" + num).appendChild(gradeInput)

    let weightInput = document.createElement("input")
    weightInput.type = "number"
    weightInput.className = "inputNumber"
    weightInput.id = "weight" + num
    weightInput.placeholder = "Weight"
    weightInput.appendChild(wtf)
    document.getElementById("realRow" + num).appendChild(weightInput)
    num++
}

let calculateGrade = function () {
    let inputGrade = 0
    let inputWeight = 0
    for (let i = 0; i < num ; i++) {
        inputGrade = parseInt(document.getElementById("grade" + i).value)
        inputWeight = parseInt(document.getElementById("weight" + i).value)
        sum += inputGrade * inputWeight
        weightSum += inputWeight

        /*if ((document.getElementById("grade" + i).value) !== null) {
            inputGrade = parseInt(document.getElementById("grade" + i).value)
            if ((document.getElementById("weight" + i).value) !== null) {
                inputWeight = parseInt(document.getElementById("weight" + i).value)
            }
        }*/
    }

    result = (sum / weightSum).toFixed(2)

    /*let output = document.createElement("a")*/
    let stb
    const ass = document.querySelector(".sda")

    if (result > 40) {
        //stb = document.createTextNode("You are not! Your grade is " + result)
        const ssa = document.createElement("a")
        ssa.innerHTML = "You are not failing your class! Your grade is " + result + "."
        ssa.className = "sda"
        ass.parentNode.replaceChild(ssa, ass)
    } else {
        //stb = document.createTextNode("Yes you are! Your grade is " + result)
        const ssa = document.createElement("a")
        ssa.innerHTML = "You are failing your class! Your grade is " + result +"."
        ssa.className = "sda"
        ass.parentNode.replaceChild(ssa, ass)
    }




    //output.appendChild(stb)
    //document.getElementById("sss").appendChild(output)

    sum = 0
    weightSum = 0
    result = 0;
}

