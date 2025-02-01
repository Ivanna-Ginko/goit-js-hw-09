const formData = { 
    email: "", 
    message: "" 
}
const storageKey = 'feedback-form-state';



const form = document.querySelector(".feedback-form");


form.addEventListener("input", (e) => {
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();
    formData.email = email;
    formData.message = message;
    saveToLS(storageKey, formData);
})

function initPage (){
    const localMsg = loadFromLS(storageKey)
    form.elements.email.value = localMsg?.email || "";
    form.elements.message.value = localMsg?.message || "";
}

initPage();
    
form.addEventListener("submit", (e) => {
    e.preventDefault ();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
      }
    
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();
    formData.email = email;
    formData.message = message;
    console.log(formData);
    localStorage.removeItem(storageKey);
    e.target.reset();
})

function saveToLS(key, value) {
    const jsonInfo = JSON.stringify(value);
    localStorage.setItem(key, jsonInfo);
}

function loadFromLS(key) {
    const body = localStorage.getItem(key);
    try {
      const data = JSON.parse(body);
      return data;
    } catch {
      return body;
    }
}