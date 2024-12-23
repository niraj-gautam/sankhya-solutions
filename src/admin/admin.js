let blogs = [
    {
        id: 1,
        title: "First Blog",
        date: "2024-11-01",
        content: "<p>This is the first blog.</p>",
        image: "image1.jpg",
    },
    {
        id: 2,
        title: "Second Blog",
        date: "2024-11-10",
        content: "<p>This is the second blog.</p>",
        image: "image2.jpg",
    },
    {
        id: 3,
        title: "Third Blog",
        date: "2024-11-15",
        content: "<p>This is the third blog.</p>",
        image: "image3.jpg",
    },
];

let editingBlog = null; // To keep track of the blog being edited

// Initialize Quill Editor
var quill = new Quill("#editor-container", {
    theme: "snow",
    modules: {
        toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            [{ align: [] }],
            ["link"],
            ["blockquote", "code-block"],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            ["image"],
        ],
    },
});

// Function to render the blog list
function renderBlogList() {
    const blogListElement = document.getElementById("blog-list");
    blogListElement.innerHTML = "";
    blogs.forEach((blog) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${blog.title}</td>
            <td>${blog.date}</td>
            <td><img src="${blog.image}" alt="Blog Image" style="max-width: 100px;"></td>
            <td class="blog-actions">
                <button onclick="editBlog(${blog.id})">Edit</button>
                <button onclick="removeBlog(${blog.id})">Remove</button>
            </td>
        `;
        blogListElement.appendChild(row);
    });
}

// Function to show the "Add Blog" form
function showAddBlogForm() {
    document.getElementById("add-blog-form").style.display = "block";
    document.getElementById("form-title").textContent = "Add Blog";
    document.getElementById("blog-title").value = "";
    quill.root.innerHTML = ""; // Clear Quill editor content
    document.getElementById("current-image").style.display = "none"; // Hide image preview
    document.getElementById("blog-image").value = ""; // Clear file input
    editingBlog = null; // Reset editing
}

// Function to edit a blog
function editBlog(id) {
    editingBlog = blogs.find((blog) => blog.id === id);
    document.getElementById("add-blog-form").style.display = "block";
    document.getElementById("form-title").textContent = "Edit Blog";
    document.getElementById("blog-title").value = editingBlog.title;
    quill.root.innerHTML = editingBlog.content; // Load content into Quill editor

    if (editingBlog.image) {
        document.getElementById("image-preview").src = editingBlog.image;
        document.getElementById("current-image").style.display = "block";
    }
}

// Function to remove a blog
function removeBlog(id) {
    blogs = blogs.filter((blog) => blog.id !== id);
    renderBlogList();
}

// Function to save or update a blog
function saveBlog() {
    const title = document.getElementById("blog-title").value;
    const content = quill.root.innerHTML;
    const imageUrl = document.getElementById("blog-image").files[0]
        ? URL.createObjectURL(document.getElementById("blog-image").files[0])
        : null;

    if (title && content) {
        if (editingBlog) {
            // Update existing blog
            editingBlog.title = title;
            editingBlog.content = content;
            editingBlog.image = imageUrl || editingBlog.image;
            editingBlog.date = new Date().toISOString().split("T")[0]; // Update date to current date
        } else {
            // Add new blog
            const newBlog = {
                id: blogs.length + 1,
                title: title,
                content: content,
                image: imageUrl,
                date: new Date().toISOString().split("T")[0],
            };
            blogs.push(newBlog);
        }

        document.getElementById("add-blog-form").style.display = "none"; // Hide form
        renderBlogList();
    } else {
        alert("Please fill in both the title and content.");
    }
}

// Function to cancel the form
function cancelForm() {
    document.getElementById("add-blog-form").style.display = "none";
}

// Function to remove image during editing
function removeImage() {
    if (editingBlog) {
        editingBlog.image = null;
    }
    document.getElementById("image-preview").src = "";
    document.getElementById("current-image").style.display = "none";
    document.getElementById("blog-image").value = ""; // Clear file input
}

// Initial render
renderBlogList();
