document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-featured');
    const contents = document.querySelectorAll('.featured-content');
  
    function hideAllContents() {
      contents.forEach(content => {
        if (!content.classList.contains('hidden')) {
          content.classList.remove('opacity-100');
          content.classList.add('opacity-0');
          content.addEventListener('transitionend', function onTransitionEnd() {
            content.classList.add('hidden');
            content.removeEventListener('transitionend', onTransitionEnd);
          });
        }
      });
    }
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.id.replace('btn-', 'content-');
        const targetContent = document.getElementById(targetId);
  
        hideAllContents();
  
        if (targetContent.classList.contains('hidden')) {
          targetContent.classList.remove('hidden');
          // Delay to ensure the content is in the DOM before applying opacity
          setTimeout(() => {
            targetContent.classList.add('opacity-100');
          }, 10);
        } else {
          targetContent.classList.remove('opacity-100');
          targetContent.classList.add('opacity-0');
          targetContent.addEventListener('transitionend', function onTransitionEnd() {
            targetContent.classList.add('hidden');
            targetContent.removeEventListener('transitionend', onTransitionEnd);
          });
        }
      });
    });
  
    // Close content when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.content') && document.querySelector('.featured-content:not(.hidden)')) {
        hideAllContents();
      }
    });
  });
  