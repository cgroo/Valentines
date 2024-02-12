const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn'); // Add this line
const noContainer = document.getElementById('no-container');
const response = document.getElementById('response');
const checklist = document.getElementById('checklist');

let noCount = 0;

noBtn.addEventListener('click', () => {
  noCount++;

  if (noCount < 10) {
    response.innerText = getNoText();
  } else if (noCount === 10) {
    response.innerText = "You're so annoying C:";
    noContainer.removeChild(noBtn);
  } 
});

yesBtn.addEventListener('click', () => {
    response.innerText = "OMG THANK YOU <33333333"; // Fix the typo
    checklist.style.display = 'block';
    noBtn.remove();
    yesBtn.remove();
});

function getNoText() {
  const noTexts = ["Are you sure?", "Please reconsider...", "Pretty please?", "Maybe?", "Stop Capping, I know you do :p", "-_-", "SIGH", "IM BEGGING", "FFS, PLEASEEE"];
  return noTexts[noCount - 1];
}

const submitBtn = document.getElementById('submit-btn');
const content = document.getElementById('content');

submitBtn.addEventListener('click', () => {
  content.innerHTML = "<h1>Thank you!!! I'll see you on the 14th <3</h1>";
});