// Blog Data (Initially empty)
let blogs = [];

// DOM Elements
const mainContent = document.getElementById("mainContent");
const addBlogModal = document.getElementById("addBlogModal");
const closeBlogButton=document.getElementById("close-button")
const addBlogForm = document.getElementById("addBlogForm");
const addBlogButton = document.getElementById("addBlogButton");

// Display Blogs on Home Page
function displayBlogs() {
  mainContent.innerHTML = "";

  blogs.forEach((blog, index) => {
    const blogCard = `
      <div class="blog-card">
        <img src="${blog.postUrl}" alt="blog Image">
        <div class='bind'><h2>${blog.title}</h2>
        <p>${blog.description}</p>
        <button onclick="viewBlog(${index})">Read More</button></div>
      </div>
    `;
    mainContent.innerHTML += blogCard;
  });
}

// Display Individual Blog on Blog Page
function viewBlog(index) {
  addBlogButton.style.display="none";
  document.getElementById('home').style.display='block';
  const blog = blogs[index];
  const blogContent = `
    <div class="blog-card1">
    <div class="upper">
    <div class="left"><h2>${blog.title}</h2><p>${blog.description}</p>
    </div>
      
      <img src="${blog.postUrl}" alt="blog Image">
    </div>
      <p>${blog.content}</p>
    </div>
  `;
  mainContent.innerHTML = blogContent;
}

// Show Add Blog Modal
function showAddBlogModal() {
  addBlogModal.style.display = "block";
}

// Close Add Blog Modal
function closeAddBlogModal() {
  addBlogModal.style.display = "none";
  addBlogForm.reset();
}

// Handle Add Blog Form Submission
function addBlog(event) {
  event.preventDefault();

  const postUrl = document.getElementById("postUrl").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const content = document.getElementById("content").value;

  const newBlog = {
    postUrl,
    title,
    description,
    content,
  };

  blogs.push(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  displayBlogs();
  closeAddBlogModal();
}

// Event Listeners
addBlogButton.addEventListener("click", showAddBlogModal);
closeBlogButton.addEventListener("click",closeAddBlogModal)
addBlogForm.addEventListener("submit", addBlog);

// Check if Blogs exist in LocalStorage
const storedBlogs = localStorage.getItem("blogs");
if (storedBlogs) {
  blogs = JSON.parse(storedBlogs);
  displayBlogs();
}


//Add Resriction feature to the content id
//Don't allow to copy paste in content div

const content=document.getElementById('content');

//add event listener
content.addEventListener('paste',(e)=> e.preventDefault());
