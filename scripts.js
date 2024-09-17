// for floatingNav

const floatingNavs = document.querySelectorAll(".floating-nav a");

const removeActiveClass = () => {
  floatingNavs.forEach((nav) => {
    nav.classList.remove("active");
  });
};

floatingNavs.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveClass(); // Remove active class from all links
    nav.classList.add("active"); // Add active class to the clicked link
  });
});

// for resume

const resumeRight = document.querySelector(".resume-right");
const experienceContent = ` <h4>Experience</h4>
          <p>
            As a Frontend Developer, I have gained experience in building and optimizing user-friendly websites. My focus is on delivering clean, responsive interfaces and ensuring seamless user experiences.
          </p>
          <ul>
            <li>
              <h6>2023 - Present</h6>
              <h5>Freelance FrontEnd Developer</h5>
              <p>Providing tailored front-end solutions, building responsive websites, and ensuring smooth user experiences through modern web technologies. Specializing in HTML, CSS, JavaScript, and responsive design to create engaging and functional user interfaces.</p>
            </li>
            <li>
              <h6>April 2024 - Present</h6>
              <h5>FrontEnd Developer</h5>
              <p>Aptech Computer Education.</p> <br>
              <p>Developed and maintained responsive and interactive web applications using HTML, CSS, JavaScript. <br> <br> Worked on debugging, testing, and deploying web applications to ensure seamless functionality.</p>
            </li>
         
          </ul>`;

const experienceBtn = document.querySelector(".experience-btn");

experienceBtn.addEventListener("click", () => {
  resumeRight.innerHTML = experienceContent;
  experienceBtn.classList.add("btn-primary");
  resumeRight.className = "resume-right";
  //   experienceBtn.className.add("btn-primary");

  //   remove classList from other buttons
  aboutBtn.classList.remove("btn-primary");
  skillsBtn.classList.remove("btn-primary");
  educationBtn.classList.remove("btn-primary");
});

//set experience content as defult content for resume right when the page loads
resumeRight.innerHTML = experienceContent;

// for education
const educationBtn = document.querySelector(".education-btn");

const educationContent = `<h4>Education</h4>
   <p> 
     Outlined below are the key milestones in my educational journey.
   </p>
<ul>
  <li>
    <h5>University Education</h5>
  <p>
      Cresent university
  </p>
  <p>
      Bachelor of Science (B.Sc.) in Accounting.
   </p>
   <p>
     Second Class Upper (2:1)
   </p>
   <p>
      Ogun State, Nigeria.
   </p>
  </li>
  <li>
    <h5>FrontEnd Education</h5>
    <p>
      Aptech Computer Education
    </p>
    <p>
      FrontEnd Development
   </p>
    <p>
      Lagos, Nigeria.
   </p>
  </li>
  <li>
    <h5>Diploma Education</h5>
    <p>
      Yaba College of Education
    </p>
    <p>
      Higher National Diploma (HND) in Accounting.
   </p>
   <p>
      Lagos, Nigeria.
   </p>
  </li>
</ul>
`;

educationBtn.addEventListener("click", () => {
  resumeRight.innerHTML = educationContent;
  //   resumeRight.classList.add("education");
  resumeRight.className = "resume-right education";
  educationBtn.classList.add("btn-primary");

  //   remove classList from other buttons
  aboutBtn.classList.remove("btn-primary");
  skillsBtn.classList.remove("btn-primary");
  experienceBtn.classList.remove("btn-primary");
});

// skills

const skillsContent = `<h4>Skills</h4>
<p> 
Below is a summary of the key skills I have developed throughout my journey in Frontend Devlopement.</p>
<ul>
  <li><img src="images/JavaScript-logo.png" alt="js logo" /></li>
  <li><img src="images/html-logo.jpg" alt="html logo" /></li>
  <li><img src="images/CSS-logo.png" alt="css logo" /></li>
  <li><img src="images/bootstrap-logo.png" alt="bootstrap logo" /></li>
  <li><img src="images/jQuery-logo.png" alt="jQuery logo" /></li>
</ul>`;

const skillsBtn = document.querySelector(".skills-btn");
skillsBtn.addEventListener("click", () => {
  resumeRight.innerHTML = skillsContent;
  //   resumeRight.classList.add("skills");
  resumeRight.className = "resume-right skills";
  skillsBtn.classList.add("btn-primary");

  //   remove classList from other buttons
  aboutBtn.classList.remove("btn-primary");
  experienceBtn.classList.remove("btn-primary");
  educationBtn.classList.remove("btn-primary");
});

// about me

const aboutContent = `<h4>About me</h4>
<p>Hi, I’m Daniel, a Frontend Developer who loves crafting beautiful, user-friendly websites. My passion for design and problem-solving drives me to bring creative ideas to life through code. With an accounting background, I have strong analytical skills and attention to detail, which enhance my technical work. This blend of creativity and precision helps me deliver elegant, functional solutions. Outside of coding, I enjoy exploring new technologies, staying updated on design trends, and savoring a good coffee. I’m eager to connect with fellow developers and collaborate on exciting projects. Let’s create something amazing together!

</p>
<ul>
  <li>
    <h6>Name:</h6>
    <h5>Daniel Kuku</h5>
  </li>
  <li>
    <h6>Email:</h6>
    <h5>
      <a href="mailto:cristobaldaniel022@gmail.com"
        >cristobaldaniel022@gmail.com</a
      >
    </h5>
  </li>
  <li>
    <h6>Email:</h6>
    <h5>
        <a href="tel: +2348167041876">+2348167041876</a>
    </h5>
  </li>
  <li>
    <h6>Nationality:</h6>
    <h5>Nigerian</h5>
  </li>
  <li>
    <h6>Language:</h6>
    <h5>English</h5>
  </li>
</ul>
`;

const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", () => {
  resumeRight.innerHTML = aboutContent;
  resumeRight.className = "resume-right about";
  aboutBtn.classList.add("btn-primary");
  //   remove classList from other buttons
  skillsBtn.classList.remove("btn-primary");
  experienceBtn.classList.remove("btn-primary");
  educationBtn.classList.remove("btn-primary");
});

//*************FAQS

const faqs = document.querySelectorAll(".faqs-item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const p = faq.querySelector("p");
    const icon = faq.querySelector(".faqs-icon");
    if (p.classList.contains("show")) {
      p.classList.remove("show");
      icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    } else {
      p.classList.add("show");
      icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
    }
  });
});

// THEME
const themeToggler = document.querySelector(".nav-theme-btn");
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  if (document.body.classList == "") {
    themeToggler.innerHTML = `<i class="bi bi-moon"></i>`;
    window.localStorage.setItem("portfolio-theme", "");
  } else {
    themeToggler.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    window.localStorage.setItem("portfolio-theme", "dark-theme-variables");
  }
});

//use theme from local strorage if the page load or relaod
const bodyClass = window.localStorage.getItem("portfolio-theme");
document.body.className = bodyClass;
