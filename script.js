/* function declaration
  this function is used to provide information about myself, and the data is stored in a variable called information
  and then the information will be printed in the console, and the data is taken from the parameter of the function
 this personal data
 */

 let IsGraduated = true;
 function provideInformation(fullname, age, education,major, grade, email, phonenumber) {
   return `Hello introduce myself, my name is ${fullname}, I am ${age} years old and I graduated from
    ${education} with a major in ${major}. My grade is ${grade} and you can reach me at ${email} or ${phonenumber}.`;
 }

 let information = provideInformation('Jufi Rachmana D.C.', 19, 'State Senior High School 8 Garut',
   'Natural Science / IPA', '87,08', 'jufirachmanadwichandra@gmail.com', '+62895-4174-06600');
  console.log(information);

/* Global
 DOM Selection
 */
console.info(document.head);
console.info(document.body);
console.info(document.images);

// this effect activate when the profile picture is clicked

const profile = document.querySelector(".Image-Profile");

profile.addEventListener("click", () => {
  profile.classList.remove("spin");

  void profile.offsetWidth;

  profile.classList.add("spin");
});

// this effect activate when user click image, variable or number from the Contact and Social Media
document
  .querySelector("#WhatsappContact")
  .addEventListener("click", function () {
    this.classList.add("clicked");
    console.log("You have clicked on this Whatsapp Contact");
  });

document.querySelector("#Gmail").addEventListener("click", function () {
  this.classList.add("clicked");
  console.log("You have clicked on this Email");
});

document.querySelector("#Instagram").addEventListener("click", function () {
  this.classList.add("clicked");
  console.log("You have clicked on this Instagram");
});

document.querySelector("#GitHub").addEventListener("click", function () {
  this.classList.add("clicked");
  console.log("You have clicked on this GitHub");
});

// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });
}

/* this effect activate when the cv button is clicked
  if in begin open the website, the cv not show,
  but when the button is clicked, the cv will show
  */

const cvButton = document.querySelector(".cv-btn");
const toast = document.getElementById("toast");

cvButton.addEventListener("click", function () {
  toast.classList.add("show");
  console.log("You have clicked on this CV ");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});