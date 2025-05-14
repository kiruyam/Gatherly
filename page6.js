document.querySelector('.back-btn').addEventListener('click', () => {
    window.location.href = 'eventDetails.html'; 
  });
  
  document.querySelector('.send-invitations-btn').addEventListener('click', () => {
    alert('Invitations sent successfully!');
  });
  
  document.querySelectorAll('.edit-btn').forEach((button) => {
    button.addEventListener('click', () => {
      alert('Edit functionality is not implemented yet.');
    });
  });
  
  document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const invitation = button.parentElement;
      invitation.remove();
      alert('Invitation deleted.');
    });
  });  