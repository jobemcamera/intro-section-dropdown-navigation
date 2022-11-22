// Features
const featuresContent = document.querySelector('.features-dropdown');
const arrowUpFeatures = document.querySelector('.arrow-up-features');
const dropDownFeatures = document.querySelector('#btn-features');
const arrowDownFeatures = document.querySelector('.arrow-down-features');
// Company
const companyContent = document.querySelector('.company-dropdown');
const arrowUpCompany = document.querySelector('.arrow-up-company');
const arrowDownCompany = document.querySelector('.arrow-down-company');
const dropDownCompany = document.querySelector('#btn-company');


dropDownFeatures.addEventListener('click', function() {
    if (featuresContent.style.display == 'block') {
        featuresContent.style.display = 'none';
        arrowDownFeatures.style.display = 'inline';
        arrowUpFeatures.style.display = 'none';   
    } else {
        featuresContent.style.display = 'block';
        arrowUpFeatures.style.display = 'inline';
        arrowDownFeatures.style.display = 'none';
       
    }
});

dropDownCompany.addEventListener('click', function() {
    if (companyContent.style.display == 'block') {
        companyContent.style.display = 'none';
        arrowDownCompany.style.display = 'inline';
        arrowUpCompany.style.display = 'none';
    } else {
        companyContent.style.display = 'block';
        arrowUpCompany.style.display = 'inline';
        arrowDownCompany.style.display = 'none';
    }
});

const closeMenu = document.querySelector('.close-icon-menu');
const openMenu = document.querySelector('.open-icon-menu');
const menuBar = document.querySelector('.menu-bar');
const loginRegister = document.querySelector('.login-register');

openMenu.onclick = () => {
    menuBar.classList.add('active');
    loginRegister.classList.add('active');
};

closeMenu.onclick = () => {
    menuBar.classList.remove('active');
    loginRegister.classList.remove('active');
};
