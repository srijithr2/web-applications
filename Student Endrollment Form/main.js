const enroll = document.getElementById('endroll_button');
enroll.addEventListener("click",endrolledStudentDetails);

const clear = document.getElementById('clear_button');
clear.addEventListener("click",cleardata);

var row = 1;
function endrolledStudentDetails(e){
    let name = document.getElementById('studentname').value;
    const email = document.getElementById('studentemail').value;
    const website = document.getElementById('studentwebsite').value;
    const image = document.getElementById('studentimage').value;
    const gendermale = document.getElementById('studentgendermale');
    const genderfemale = document.getElementById('studentgenderfemale');
    const skills = document.getElementById('skills');



    if(!name ||  !email || !website || !image){
        alert("Please fill all details");
        return;
    }

    const display = document.getElementById('details_table');
    const newrow = display.insertRow(row);
    const cell1= newrow.insertCell(0);
    const cell2=newrow.insertCell(1);

        if(gendermale.checked == true){
            genderfemale.checked=false
            var genderval = gendermale.value;
        }else if(genderfemale.checked == true){
            gendermale.checked=false
            var genderval = genderfemale.value;

        }
        else{
            alert('Please select gender and skills')
        }
        let skillvalues = [];
        let checkBox = document.getElementById('skills');
        for(let i = 0; i< checkBox.length; i++){
            if (checkBox[i].checked == true){
                skillvalues.push(checkBox[i].value);
            }
        }
        
        cell1.innerHTML = "<b>"+name+"</b>"+"<br>"+ genderval +"<br>"+ email +"<br>"+ website +"<br>"+ skillvalues;
        cell2.innerHTML = "<img src = 'images/profile.jpg' width= '140px' height ='120px' >"

        document.getElementById('studentname').value='';
        document.getElementById('studentemail').value='';
        document.getElementById('studentwebsite').value='';
        document.getElementById('studentimage').value='';
        document.getElementById('studentgendermale').checked= false;
        document.getElementById('studentgenderfemale').checked= false;
        document.getElementById('skilljava').checked= false;
        document.getElementById('skillhtml').checked= false;
        document.getElementById('skillcss').checked= false;
}
function cleardata(){
    document.getElementById('studentname').value='';
    document.getElementById('studentemail').value='';
    document.getElementById('studentwebsite').value='';
    document.getElementById('studentimage').value='';
    document.getElementById('studentgendermale').checked= false;
    document.getElementById('studentgenderfemale').checked= false;
    document.getElementById('skilljava').checked= false;
    document.getElementById('skillhtml').checked= false;
    document.getElementById('skillcss').checked= false;
}