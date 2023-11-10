function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");
    member.style.backgroundColor = "#2c3e50";
    skills.style.backgroundColor = "#34495e";
    projects.style.backgroundColor = "#34495e";
    contact.style.backgroundColor = "#34495e";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
}