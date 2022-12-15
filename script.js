//***************************** */ js for details.html file ****************************


//  to add more fields dynamically if click on plus button
function addAchievement() {
  let addAchInput = document.createElement("div");
  addAchInput.classList.add("row");
  let html = "";
  html = `<hr>

  <div class="col">
  <!-- title input -->
  <div >
  <label  for="title">Title</label>
    <input type="text" id="title" class="form-control title" />
    
  </div>
</div>
<div class="col">
  <!-- description input -->
  <div>
  <label  for="description">Description</label>
    <input type="textarea" id="description" class="form-control description" />
    
  </div>
</div>`;
  addAchInput.innerHTML = html;
  let addAch = document.getElementById("addAch");
  addAch.appendChild(addAchInput);
}
//  to add more fields dynamically if click on plus button
function addExperience() {
  let addExInput = document.createElement("div");
  addExInput.classList.add("cont");
  let html = "";
  html = `<hr>

   <div class="row">
        <div class="col">
          
          <div>
          <label  for="jobTitle">Title</label>
            <input type="text" id="jobTitle" class="form-control jobTitle" />
            
          </div>
        </div>
        <div class="col">
           
           <div >
           <label  for="yearEx">No. of Years</label>
            <input type="text" id="yearEx" class="form-control jobYear" />
           
          </div>
         
        </div>
        <div class="col">
          <!-- location input -->
          <div >
          <label  for="location">Location</label>
            <input type="email" id="location" class="form-control location" />
            
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          
          <div >
          <label  for="company">Company/Organization</label>
            <input type="text" id="company" class="form-control company" />
            
          </div>
        </div>
        <div class="col">
        
          <div >
          <label  for="jobDescription">description</label>
            <input type="textarea" id="jobDescription" class="form-control jobDescription" />
            
          </div>
        </div>
        
      </div>`;
  addExInput.innerHTML = html;
  let addEx = document.getElementById("addEx");
  addEx.appendChild(addExInput);
}
//  to add more fields dynamically if click on plus button
function addEducation() {
  let addEdInput = document.createElement("div");
  addEdInput.classList.add("cont");
  let html = "";
  html = `<hr>

  <div class="row">
  <div class="col">
    <!-- school input -->
    <div >
      <label  for="school">School/College</label>
      <input type="text" id="school" class="form-control school" />
      
    </div>
  </div>
  <div class="col">
     <!-- degree input -->
     <div >
      <label  for="degree">Degree</label>
      <input type="text" id="degree" class="form-control degree" />
      
    </div>
   
  </div>
  <div class="col">
    <!-- board input -->
    <div >
      <label  for="board">Board</label>
      <input type="text" id="board" class="form-control board" />
      
    </div>
  </div>
</div>
<hr />
<div class="row">
  <div class="col">
    <!-- year input -->
    <div >
      <label  for="year">Year of Completion</label>
      <input type="text" id="year" class="form-control year" />
      
    </div>
  </div>
  <div class="col">
    <!--percentage input -->
    <div >
      <label for="percentage"> Percentage</label>
      <input type="text" id="percentage" class="form-control percentage" />
      
    </div>
  </div>
  
</div>`;
  addEdInput.innerHTML = html;
  let addEd = document.getElementById("addEd");
  addEd.appendChild(addEdInput);
}
//  to add more fields dynamically if click on plus button
function addSkills() {
  let addSkillsInput = document.createElement("div");
  addSkillsInput.classList.add("row");
  let html = "";
  html = `<hr>

  <div >
           
            <input type="text" id="skills" class="form-control skills" />
            
          </div>`;
  addSkillsInput.innerHTML = html;
  let addSkills = document.getElementById("addSkills");
  addSkills.appendChild(addSkillsInput);
}
//  to add more fields dynamically if click on plus button
function addProject() {
  let addProjectInput = document.createElement("div");
  addProjectInput.classList.add("row");
  let html = "";
  html = `<hr>

  <div class="row">
        <div class="col">
          <!-- title input -->
          <div >
            <label  for="projectTitle">Title</label>
            <input type="text" id="projectTitle" class="form-control projectTitle" />
            
          </div>
        </div>
        <div class="col">
           <!-- link input -->
           <div >
            <label  for="link">Link Of Projects</label>
            <input type="text" id="link" class="form-control projectLink" />
            
          </div>
         
        </div>
        <div class="col">
          <!-- location input -->
          <div >
            <label  for="projectDesc">Description</label>
            <input type="email" id="projectDesc" class="form-control projectDesc" />
            
          </div>
        </div>
      </div>`;
  addProjectInput.innerHTML = html;
  let addProject = document.getElementById("addProject");
  addProject.appendChild(addProjectInput);
}
//  to add more fields dynamically if click on plus button
function addSlinks() {
  let addSlinksInput = document.createElement("div");
  addSlinksInput.classList.add("row");
  let html = "";
  html = `<hr>
  <div>
  <input type="text"  class="form-control sLinks" />
</div>`;
  addSlinksInput.innerHTML = html;
  let addSlinks = document.getElementById("addSLinks");
  addSlinks.appendChild(addSlinksInput);
}
// to direct the user to login page
function getStarted() {
  location.href = "login.html";
}
// to get the value of resume form and set them the resume template
 function generateResume() {
  
  //getting name in resume through form
  let name = document.getElementById("name").value;
  let nameT = document.getElementById("nameT");
  nameT.textContent = name;
  //phone
  document.getElementById("phoneT").innerHTML =
    document.getElementById("phoneNumber").value;
  //email
 document.getElementById("emailT").innerHTML =
    document.getElementById("email").value;
  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("address").value;
  //objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objective").value;
  //social links
  let links = document.getElementsByClassName("sLinks");
  let linksData = "";
  for (e of links) {
    console.log(e.value);
    linksData = linksData + `<li>${e.value}</li>`;
  }
  document.getElementById("sLinksT").innerHTML = linksData;
  //skills
  let skills = document.getElementsByClassName("skills");
  let skillsData = "";
  for (e of skills) {
    skillsData = skillsData + `<li>${e.value}</li>`;
  }
  document.getElementById("skillsT").innerHTML = skillsData;
  //education
  let school = document.getElementsByClassName("school");
  let degree = document.getElementsByClassName("degree");
  let board = document.getElementsByClassName("board");
  let year = document.getElementsByClassName("year");
  let percentage = document.getElementsByClassName("percentage");
  let educationData = "";
  for (let i = 0; i < school.length; i++) {
    educationData =
      educationData +
      `<p> ${degree.item(i).value} </br>${school.item(i).value} ,${
        year.item(i).value
      }</br> ${percentage.item(i).value} % , ${board.item(i).value}</p>`;
  }

  document.getElementById("educationT").innerHTML = educationData;

  //experience
  let jobTitle = document.getElementsByClassName("jobTitle");
  let yearEx = document.getElementsByClassName("jobYear");
  let location = document.getElementsByClassName("location");
  let company = document.getElementsByClassName("company");
  let jobDescription = document.getElementsByClassName("jobDescription");
  let experienceData = "";
  for (let i = 0; i < jobTitle.length; i++) {
    experienceData =
      experienceData +
      `<p> ${jobTitle.item(i).value} ,${yearEx.item(i).value}  </br>${
        company.item(i).value
      } ,${location.item(i).value}  </br>  ${jobDescription.item(i).value}</p>`;
  }

  document.getElementById("experienceT").innerHTML = experienceData;

  //projects
  let projectTitle = document.getElementsByClassName("projectTitle");
  let projectDesc = document.getElementsByClassName("projectDesc");
  let projectLink = document.getElementsByClassName("projectLink");
  let projectData = "";
  for (let i = 0; i < projectTitle.length; i++) {
    projectData =
      projectData +
      `<p> ${projectTitle.item(i).value} </br> ${
        projectLink.item(i).value
      } </br>${projectDesc.item(i).value} </p>`;
  }

  document.getElementById("projectT").innerHTML = projectData;

  //achievement
  let title = document.getElementsByClassName("title");
  let description = document.getElementsByClassName("description");
  let achievementData = "";
  for (let i = 0; i < title.length; i++) {
    achievementData =
      achievementData +
      `<p> ${title.item(i).value} <br> ${description.item(i).value}</p>`;
  }

  document.getElementById("achievementT").innerHTML = achievementData;

  // to set profile photo
  let file = document.getElementById("photo").files[0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      document.getElementById("profile").src = reader.result;
    };
  } else {
    document.getElementById("profile").src = "profile.png";
  }

  //preview button(to show resume template)
  document.getElementById("resumeForm").style.display = "none";
  document.getElementById("resumeTemplate").style.display = "block";

//to hide social links if not fill
let sLinksHide = document.getElementById("sLinksHide");
let sLinksInput = document.getElementsByClassName("sLinks");
let isSLinksValueField=false
for (let i = 0; i < sLinksInput.length; i++) {
  if(sLinksInput.item(i).value){
    isSLinksValueField=true
    break
  }
}
if (!isSLinksValueField) {
  sLinksHide.style.display = "none";
}



//to hide skills if not fill
let skillsHide = document.getElementById("skillsHide");
let skillsInput = document.getElementsByClassName("skills");
let isSkillsValueField=false
for (let i = 0; i < skillsInput.length; i++) {
  if(skillsInput.item(i).value){
    isSkillsValueField=true
    break
  }
}
if (!isSkillsValueField) {
  skillsHide.style.display = "none";
}

//to hide objective if not fill
let objectiveHide = document.getElementById("objectiveHide"); 
if (!document.getElementById("objective").value ) {
  objectiveHide.style.display = "none";
}

//to hide education if not fill
let educationHide = document.getElementById("educationHide");
let educationInput = document.getElementsByClassName("school");
let isEducationValueField=false
for (let i = 0; i < educationInput.length; i++) {
  if(educationInput.item(i).value){
    isEducationValueField=true
    break
  }
}
if (!isEducationValueField) {
  educationHide.style.display = "none";
}
//to hide experience if not fill
let experienceHide = document.getElementById("experienceHide");
let experienceInput = document.getElementsByClassName("jobTitle");
let isExperienceValueField=false
for (let i = 0; i < experienceInput.length; i++) {
  if(experienceInput.item(i).value){
    isExperienceValueField=true
    break
  }
}
if (!isExperienceValueField) {
  experienceHide.style.display = "none";
}

//to hide achievements  if not fill
let achievementHide = document.getElementById("achievementHide");
let achievementInput = document.getElementsByClassName("title");
let isAchievementValueField=false
for (let i = 0; i < achievementInput.length; i++) {
  if(achievementInput.item(i).value){
    isAchievementValueField=true
    break
  }
}
if (!isAchievementValueField) {
  achievementHide.style.display = "none";
}

//to hide project  if not fill
let projectHide = document.getElementById("projectHide");
let projectInput = document.getElementsByClassName("projectTitle");
let isProjectValueField=false
for (let i = 0; i < projectInput.length; i++) {
  if(projectInput.item(i).value){
    isProjectValueField=true
    break
  }
}
if (!isProjectValueField) {
  projectHide.style.display = "none";
}

 }
// to direct the user to form again
function backToForm(){
  document.getElementById("resumeForm").style.display = "block";
  document.getElementById("resumeTemplate").style.display = "none";
}
//to print pdf
function printResume() {
  document.getElementById("print").style.display = "none";
  document.getElementById("back").style.display = "none";
  document.getElementById("colorButton").style.display = "none";
  const element = document.getElementById("resumeTemplate");
  html2pdf().from(element).save("Resume.pdf");
}
//to change the color of resume
function blue() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "blue";
  }
  document.getElementById("bg").style.backgroundColor = "blue";
}
function brown() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "brown";
  }
  document.getElementById("bg").style.backgroundColor = "brown";
}
function darkcyan() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "darkcyan";
  }
  document.getElementById("bg").style.backgroundColor = "darkcyan";
}
function coral() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "coral";
  }
  document.getElementById("bg").style.backgroundColor = "coral";
}
function darkkhaki() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "darkkhaki";
  }
  document.getElementById("bg").style.backgroundColor = "darkkhaki";
}
function aqua() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "aqua";
  }
  document.getElementById("bg").style.backgroundColor = "aqua";
}
function beige() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "beige";
  }
  document.getElementById("bg").style.backgroundColor = "beige";
}
function blueviolet() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "blueviolet";
  }
  document.getElementById("bg").style.backgroundColor = "blueviolet";
}
function burlywood() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "burlywood";
  }
  document.getElementById("bg").style.backgroundColor = "burlywood";
}
function cadetblue() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "cadetblue";
  }
  document.getElementById("bg").style.backgroundColor = "cadetblue";
}
function chocolate() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "chocolate";
  }
  document.getElementById("bg").style.backgroundColor = "chocolate";
}
function cornflowerblue() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "cornflowerblue";
  }
  document.getElementById("bg").style.backgroundColor = "cornflowerblue";
}
function darkgoldenrod() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "darkgoldenrod";
  }
  document.getElementById("bg").style.backgroundColor = "darkgoldenrod";
}
function darkgray() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "darkgray";
  }
  document.getElementById("bg").style.backgroundColor = "darkgray";
}
function darkmagenta() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "darkmagenta";
  }
  document.getElementById("bg").style.backgroundColor = "darkmagenta";
}
function darksalmon() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "darksalmon";
  }
  document.getElementById("bg").style.backgroundColor = "darksalmon";
}
function deepskyblue() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "deepskyblue";
  }
  document.getElementById("bg").style.backgroundColor = "deepskyblue";
}
function forestgreen() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "forestgreen";
  }
  document.getElementById("bg").style.backgroundColor = "forestgreen";
}
function indianred() {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "indianred";
  }
  document.getElementById("bg").style.backgroundColor = "indianred";
}
function lavender  () {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "lavender";
  }
  document.getElementById("bg").style.backgroundColor = "lavender";
}
function lavenderblush  () {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "lavenderblush";
  }
  document.getElementById("bg").style.backgroundColor = "lavenderblush";
}
function lemonchiffon  () {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "lemonchiffon";
  }
  document.getElementById("bg").style.backgroundColor = "lemonchiffon";
}
function lightpink  () {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "lightpink";
  }
  document.getElementById("bg").style.backgroundColor = "lightpink";
}
function mediumaquamarine  () {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "mediumaquamarine";
  }
  document.getElementById("bg").style.backgroundColor = "mediumaquamarine";
}
function plum  () {
  let elements = document.getElementsByClassName("bg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "plum";
  }
  document.getElementById("bg").style.backgroundColor = "plum";
}


