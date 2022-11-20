
const dropDownFeatures = document.querySelector('#btn-features');
const featuresContent = document.querySelector('.features-dropdown');
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');
const dropDownCompany = document.querySelector('#btn-company');
const companyContent = document.querySelector('.company-dropdown');

dropDownFeatures.addEventListener('click', function() {
    if (featuresContent.style.display == 'block') {
        featuresContent.style.display = 'none';
    } else {
        featuresContent.style.display = 'block';
    }
});

dropDownCompany.addEventListener('click', function() {
    if (companyContent.style.display == 'block') {
        companyContent.style.display = 'none';
    } else {
        companyContent.style.display = 'block';
    }
});