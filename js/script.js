document.addEventListener("DOMContentLoaded", () => {
    let contentLoaded = 0;

    const simulateLoading = setInterval(() => {
        contentLoaded += 10; // Simulate loading progress
        if (contentLoaded >= 60) {
            clearInterval(simulateLoading);
            document.getElementById("loader").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
        }
    }, 300); // Simulate progress every 300ms
});

// raiseMenu
const raise = document.getElementById("raiseMenu");
const whatsapp = document.getElementById("whatsapp-menu");

    let isOpen = false;
    raise.addEventListener("click", () => {
        if (!isOpen) {
            whatsapp.style.display = 'flex';
            typeM.style.display = 'none';
            isOpen = true;
            } else {
                whatsapp.style.display = 'none';
                typeM.style.display = 'none';
                isOpen = false;
                }
    });

// Improved JavaScript to handle WhatsApp link
const cMsg = document.getElementById("cMsg");
const typeM = document.getElementById("type-m");

    cMsg.addEventListener("click" , () => {
        typeM.style.display = 'block';
        whatsapp.style.display = 'none';
        isOpen = false;
    }); 

document.getElementById("send-msg").addEventListener("click", () => {
    const messageInput = document.getElementById("cusMsg");
    const message = messageInput.value.trim();

    if (message) {
        
        typeM.style.display = 'none';
        whatsapp.style.display = 'none';
        isOpen = false;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
        messageInput.value = "";
    } else {
        alert("Please enter a message");
    }
});

document.getElementById("auto-msg").addEventListener("click", () => {
    // const phoneNumber = "+91 7398882468"; // Replace with your number
    const message = "Hi! I’d love to explore a collaboration opportunity with you. Let’s connect and discuss how we can work together!"; // Replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    whatsapp.style.display = 'none';
                isOpen = false;
    
    // Open the WhatsApp link in a new tab
    window.open(url, "_blank");
});

function scrollDown() {
    // Scroll to the element with id "edu"
    document.getElementById("education").scrollIntoView({ behavior: "smooth", block: "start" });
}
function About() {
  // Scroll to the element with id "edu"
  document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "start" });
}
// Show a popup mdg not any service available"
function Service() {
  document.getElementById("customPopup").style.display = "flex"; // Show popup
}

function closePopup() {
  document.getElementById("customPopup").style.display = "none"; // Hide popup
}

function viewProj() {
  document.getElementById("customPopupV").style.display = "flex"; // Show popup
}

function closePopupV() {
  document.getElementById("customPopupV").style.display = "none"; // Hide popup
  const ContactElement = document.getElementById("contact");
  if (ContactElement) {
    ContactElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error("Element with id 'profile' not found.");
  }
}
function Home() {
  const profileElement = document.getElementById("profile");
  if (profileElement) {
    profileElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error("Element with id 'profile' not found.");
  }
}
function Contact() {
  const ContactElement = document.getElementById("contact");
  if (ContactElement) {
    ContactElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error("Element with id 'profile' not found.");
  }
}
function scrollProf() {
    // Scroll to the element with id "edu"
    document.getElementById("profile").scrollIntoView({ behavior: "smooth", block: "start" });
}

// Get the current year and display it
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// JavaScript to handle direct phone call link
const phoneNumber = "+91 7398882468"; // Replace with your number

document.getElementById("nav-callBtn").addEventListener("click", () => {
    const url = `tel:${phoneNumber}`; // Direct link for calling

    // Open the call link
    window.location.href = url, "_blank";
});
document.getElementById("callButton").addEventListener("click", () => {
    const url = `tel:${phoneNumber}`; // Direct link for calling
    
    // Open the call link
    window.location.href = url, "_blank";
});

// Get the button go to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to show or hide the button based on scroll position
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.classList.add('show');
    whatsapp.style.display = 'none';
                isOpen = false;
    typeM.style.display = 'none';
  } else {
    scrollToTopBtn.classList.remove('show');
  }
};

// Function to smoothly scroll back to the top
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const scrollContainer = document.querySelector('.cards-container');
const leftButton = document.querySelector('.scroll-btn.left');
const rightButton = document.querySelector('.scroll-btn.right');

// Function to update button visibility
function updateButtonVisibility() {
    const scrollLeft = scrollContainer.scrollLeft;

    // Show or hide the left button
    leftButton.style.display = scrollLeft > 0 ? 'block' : 'none';
}

// Initial visibility check
updateButtonVisibility();

// Event listener for the left button
leftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -215, behavior: 'smooth' });
  setTimeout(updateButtonVisibility, 300); // Delay to ensure smooth scroll
});

// Event listener for the right button
rightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 215, behavior: 'smooth' });
  setTimeout(updateButtonVisibility, 300); // Delay to ensure smooth scroll
});
// Listen for scroll events to update button visibility
scrollContainer.addEventListener('scroll', updateButtonVisibility);

// scroll with mouse wheel
const container1 = document.querySelector('.cards-container');
// const container2 = document.querySelector('.cards-containerP');

container1.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
      event.preventDefault(); // Prevent vertical scrolling
        const scrollAmount = event.deltaY > 0 ? 215 : -215;
      container1.scrollLeft += scrollAmount; // Scroll horizontally
    }
});
// container2.addEventListener('wheel', (event) => {
//     if (event.deltaY !== 0) {
//       event.preventDefault(); // Prevent vertical scrolling
//         const scrollAmount = event.deltaY > 0 ? 215 : -215;
//       container2.scrollLeft += scrollAmount; // Scroll horizontally
//     }
// });

// download button
document.getElementById("downloadCV").addEventListener("click", () => {
    // URL of the PDF file
    const pdfUrl = "cv/My_resume.pdf"; // Replace with the actual path to your PDF
    // Create a link element
    const link = document.createElement("a");
    // Set the link's href to the PDF file URL
    link.href = pdfUrl;
    // Set the download attribute with the desired file name
    link.download = "yt.jpg"; // Name of the downloaded file
    // Append the link to the body (not visible)
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link after the download
    document.body.removeChild(link);
});

// URL of the API
const apiUrl = "https://test-api-sigma-gilt.vercel.app/users";
// Get the container where users will be displayed
const usersContainer = document.getElementById("cards-container");

// Fetch data from the API
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // console.log("API Response:", data); // Log the data to inspect the structure

    // Check if data is available
    if (Array.isArray(data) && data.length > 0) {
      displayUsers(data);
    } else {
      usersContainer.innerHTML = "<p>No data found.</p>";
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    usersContainer.innerHTML = "<p>Failed to load data.</p>";
  }
}

// Display users in the DOM
function displayUsers(users) {
  usersContainer.innerHTML = ""; // Clear the loading text
  users.forEach(user => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("card");

    // Match these properties to the actual API response
    userDiv.innerHTML = `
    <div class="card-data">
      <div class="card-logo" style="color: ${user.color || "white"}; font-size: 40px;">
        <i class="${user.logo}"></i>
        <h6>${user.name || "Name not available"}</h6>
      </div>
      <div class="card-disc">
        <i class="${user.logo}" style=" font-size: 80px;"></i>
        <p style="font-size: 16px;">Certified By
        <a class="text-link-bold" target="_blank"> ${user.certified || "Certified not available"}</a></p>
      </div>
      <div class="viewCert">
      <button class="btn btn-primary" onclick="viewCert(${user.id})">View Certificate</button>
      </div>
    </div>`;
      // <p>Phone: ${user.phone || "Phone not available"}</p>
    usersContainer.appendChild(userDiv);
  });
}

function viewCert(userId) {
  // Fetch the certificate data from the API
  const apiUrl = `https://test-api-sigma-gilt.vercel.app/users/${userId}/certificate`;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Display the certificate data
      if (!data.file) throw new Error("Certificate file is missing!");

      const certificateModal = document.getElementById("certificate-modal");
      certificateModal.innerHTML = `
        <canvas id="pdf-render"></canvas>
        <span class="close-btn" onclick="closeModal()">Close</span>
        `;
        const pdfUrl = `https://test-api-sigma-gilt.vercel.app/view-cert/${data.file}`; // API path for serving PDFs
        loadPDF(pdfUrl);

      // Show the certificate modal
      certificateModal.classList.add("show");
    })
    .catch(error => {
      console.error("Error fetching certificate:", error);
      const certificateModal = document.getElementById("certificate-modal");
      certificateModal.innerHTML = `
        <h2>Error fetching certificate</h2>
        <p>${error.message}</p>
        <span class="close-btn" onclick="closeModal()">Close</span>
      `;
      certificateModal.classList.add("show");
    });
}

function loadPDF(pdfUrl) {
  const loadingTask = pdfjsLib.getDocument(pdfUrl);
  loadingTask.promise.then(pdf => {
      pdf.getPage(1).then(page => {
          const canvas = document.getElementById("pdf-render");
          const ctx = canvas.getContext("2d");

          const viewport = page.getViewport({ scale: 1 });
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          page.render({ canvasContext: ctx, viewport: viewport });
      });
  }).catch(error => {
      console.error("Error loading PDF:", error);
      alert("Error loading PDF: " + error.message);
  });
}

function closeModal() {
  document.getElementById("certificate-modal").classList.remove("show");
}

  // For now, just log a message to the console
  // console.log("View Certificate button clicked");
  // }
// Call the function to fetch and display users
fetchUsers();

// Education section
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://test-api-sigma-gilt.vercel.app/education")
      .then(response => response.json())
      .then(data => {
          const educationContainer = document.getElementById("education-con");

          if (data.error) {
            educationContainer.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
              return;
          }

          data.forEach(education => {
              const educationCard = `
              <div class="row g-0 resume-lines__item animate-in-up">
            <div class="col-12 col-md-2">
              <span class="resume-lines__date animate-in-up">${education.year}</span>
            </div>
            <div class="col-12 col-md-5">
              <h5 class="resume-lines__title animate-in-up">${education.degree}</h5>
              <p class="resume-lines__source animate-in-up">Course by
                <a href="#0" class="text-link-bold" target="_blank">${education.university}</a>
              </p>
            </div>
            <div class="col-12 col-md-5">
              <p class="small resume-lines__descr animate-in-up">${education.description || ""}</p>
            </div>
          </div>
              `;
              educationContainer.innerHTML += educationCard;
          });
      })
      .catch(error => {
          document.getElementById("education-con").innerHTML = `<div class="alert alert-danger">Error fetching education.</div>`;
          console.error("Error:", error);
      });
});

// Experience section
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://test-api-sigma-gilt.vercel.app/users/1/experience")
      .then(response => response.json())
      .then(data => {
          const experienceContainer = document.getElementById("experience-con");

          if (data.error) {
            experienceContainer.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
              return;
          }

          data.forEach(experience => {
              const experienceCard = `
              <div class="row g-0 resume-lines__item animate-in-up">
            <div class="col-12 col-md-2">
              <span class="resume-lines__date animate-in-up">${experience.date}</span>
            </div>
            <div class="col-12 col-md-5">
              <h5 class="resume-lines__title animate-in-up">${experience.title}</h5>
              <p class="resume-lines__source animate-in-up">
                <a href="${experience.company.url}" class="text-link-bold" target="_blank">${experience.company.name}</a>
              </p>
            </div>
            <div class="col-12 col-md-5">
              <p class="small resume-lines__descr animate-in-up">${experience.description}</p>
            </div>
          </div>
              `;
              experienceContainer.innerHTML += experienceCard;
          });
      })
      .catch(error => {
          document.getElementById("education-con").innerHTML = `<div class="alert alert-danger">Error fetching education.</div>`;
          console.error("Error:", error);
      });
});

// Project section
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://test-api-sigma-gilt.vercel.app/projects")
      .then(response => response.json())
      .then(data => {
          const projectsContainer = document.getElementById("projects-container");

          if (data.error) {
              projectsContainer.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
              return;
          }

          data.forEach(project => {
              const projectCard = `
              <div class="row g-0 resume-lines__item animate-in-up">
            <div class="col-12 col-md-2">
              <span class="resume-lines__date animate-in-up">${project.date || "now"}</span>
            </div>
            <div class="col-12 col-md-5">
              <h5 class="resume-lines__title animate-in-up">${project.name}</h5>
              <p class="resume-lines__source animate-in-up">${project.description}</p>
              <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
            </div>
            <div class="col-12 col-md-5" style="text-align: right;">

              <a target="_blank" class="btn btn-primary" onclick="viewProj()">View Project</a>
            </div>
          </div>`;
              projectsContainer.innerHTML += projectCard;
          });
      })
      .catch(error => {
          document.getElementById("projects-container").innerHTML = `<div class="alert alert-danger">Error fetching projects.</div>`;
          console.error("Error:", error);
      });
});
              // <a href="${project.url}" target="_blank" class="btn btn-primary" onclick="viewProj()">View Project</a>
// count animation 
function animateCounter(element, target, duration) {
  let start = 0;
  let stepTime = duration / target;
  
  let timer = setInterval(() => {
      start++;
      element.innerText = start + "+";
      
      if (start >= target) {
          clearInterval(timer);
      }
  }, stepTime);
}

function onScroll(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // let counter = entry.target;
          let counter = entry.target.querySelector(".counter");
          let targetValue = parseInt(counter.getAttribute("data-target"));
          animateCounter(counter, targetValue, 2000);
          observer.unobserve(entry.target); // stop again counting
      }
  });
}

let observer = new IntersectionObserver(onScroll, { threshold: 0.5 });
let counters = document.querySelectorAll(".achievements__card");

counters.forEach(counter => {
  observer.observe(counter);
});

// control animation on scroll
function onScrollAnim(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible", "fade-in", "scale-up");
      observer.unobserve(entry.target); // observe animate
    }
  });
}

const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const observerScAn = new IntersectionObserver(onScrollAnim, observerOptions);
const animatedElements = document.querySelectorAll(".animate-in-up, .animate-card-3, .achievements__number,.content__block, .resume-lines");

animatedElements.forEach(elementAnim => {
  observerScAn.observe(elementAnim);
});

//  contact msg
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  let name = encodeURIComponent(document.querySelector("[name='Name']").value);
  let company = encodeURIComponent(document.querySelector("[name='Company']").value);
  let email = encodeURIComponent(document.querySelector("[name='E-mail']").value);
  let phone = encodeURIComponent(document.querySelector("[name='Phone']").value);
  let message = encodeURIComponent(document.querySelector("[name='Message']").value);

  // Construct the mailto link
  let mailtoLink = `mailto:kumarh7525@gmail.com?subject=Message from ${name}&body=
  Name: ${name}%0D%0A
  Company: ${company}%0D%0A
  Email: ${email}%0D%0A
  Phone: ${phone}%0D%0A
  Message: ${message}`;

  // Open default email client
  window.location.href = mailtoLink;
});
