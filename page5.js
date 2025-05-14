document.getElementById("manage-invitations-btn").addEventListener("click", function () {
    window.location.href = "page6.html";
  });
  
  document.getElementById("cancel-btn").addEventListener("click", function () {
    if (confirm("Are you sure you want to cancel? Unsaved changes will be lost.")) {
      window.history.back();
    }
  });
  
  document.getElementById("save-btn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Event details saved successfully!");
  });
  
  function goBack() {
    window.history.back();
  }  