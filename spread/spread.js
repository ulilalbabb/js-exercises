const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(u => `<span>${u}</span>`).join('')
nama.innerHTML = huruf