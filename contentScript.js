const dummyImage = chrome.runtime.getURL('dummy_profile.png');

const changeProfileImages = () => {
  const profileImages = document.querySelectorAll('img');

  profileImages.forEach(img => {
    if (
        img.src.includes('profile-display') ||
        img.src.includes('company-logo')||
        img.src.includes('profile-framed')
      ) {
      img.src = dummyImage;
    }
  });
};

// Run the function on page load
window.addEventListener('load', changeProfileImages);

// Run the function on page scroll (to catch dynamically loaded content)
window.addEventListener('scroll', changeProfileImages);
