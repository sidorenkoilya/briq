const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
const dialog=document.getElementById('callbackDialog');
document.querySelectorAll('.callback-open,.order-product').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.product){const select=document.querySelector('#callbackForm input[name="name"]');select?.focus();}dialog?.showModal();}));
document.querySelectorAll('.order-product').forEach(button=>button.addEventListener('click',()=>{const eyebrow=dialog?.querySelector('.eyebrow');if(eyebrow)eyebrow.textContent='ЗАМОВЛЕННЯ: '+button.dataset.product.toUpperCase();}));
document.getElementById('year').textContent=new Date().getFullYear();
function submitLead(form){const data=new FormData(form);const name=data.get('name')||'Не вказано';const phone=data.get('phone');const product=data.get('product')||'Зворотний дзвінок';const subject=encodeURIComponent('Заявка з сайту БрикетМаркет');const body=encodeURIComponent(`Ім’я: ${name}\nТелефон: ${phone}\nЗапит: ${product}`);window.location.href=`mailto:Sergei.budmat@gmail.com?subject=${subject}&body=${body}`;}
document.getElementById('leadForm')?.addEventListener('submit',e=>{e.preventDefault();submitLead(e.currentTarget);});
document.getElementById('callbackForm')?.addEventListener('submit',e=>{e.preventDefault();submitLead(e.currentTarget);dialog.close();});
