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
        arrowUpFeatures.style.display = 'none';
        arrowDownFeatures.style.display = 'inline';
    } else {
        featuresContent.style.display = 'block';
        arrowDownFeatures.style.display = 'none';
        arrowUpFeatures.style.display = 'inline';
    }
});

dropDownCompany.addEventListener('click', function() {
    if (companyContent.style.display == 'block') {
        companyContent.style.display = 'none';
        arrowUpCompany.style.display = 'none';
        arrowDownCompany.style.display = 'inline';
    } else {
        companyContent.style.display = 'block';
        arrowDownCompany.style.display = 'none';
        arrowUpCompany.style.display = 'inline';
    }
});