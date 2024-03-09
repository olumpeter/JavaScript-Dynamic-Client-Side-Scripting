
const searchSubstring = document.querySelector('#search_substring')
const inputTextArea = document.querySelector('#input_text_area')
const caseInsensitiveCheckbox = document.querySelector('#case_insensitive_checkbox')
const countButton = document.querySelector('#count_button')
const binIconButton = document.querySelector('#bin_icon_button')
const outputs = document.querySelector('.outputs')
const paragraph1 = document.querySelector('#paragraph1') 
const paragraph2 = document.querySelector('#paragraph2') 

countButton.addEventListener('click', () => {
    paragraph1.textContent = ''
    paragraph2.textContent = ''
    count = 0
    for (let i = 0; i < inputTextArea.value.length; i++) {
        if (caseInsensitiveCheckbox.checked) {
            if (inputTextArea.value.slice(i, searchSubstring.value.length + i).toLowerCase() === searchSubstring.value.toLowerCase()) {
                count++
                firstSubstringIndex = inputTextArea.value.toLowerCase().indexOf(searchSubstring.value)
            }
        } else {
            if (inputTextArea.value.slice(i, searchSubstring.value.length + i) === searchSubstring.value) {
                count++
                firstSubstringIndex = inputTextArea.value.indexOf(searchSubstring.value)
            }
        }
    }

    if (caseInsensitiveCheckbox.checked) {
        firstSubstringIndex = inputTextArea.value.toLowerCase().indexOf(searchSubstring.value.toLowerCase())
    } else {
        firstSubstringIndex = inputTextArea.value.indexOf(searchSubstring.value)
    }

    if (count === 0) {
        paragraph1.innerHTML = `The substring <strong>${searchSubstring.value}</strong> occurs <strong>${count}</strong> times.`
    } else {
        paragraph1.innerHTML = `The substring <strong>${searchSubstring.value}</strong> occurs <strong>${count}</strong> times.`
        paragraph2.innerHTML = `The first occurrence the substring <strong>${searchSubstring.value}</strong> is at position </strong>${firstSubstringIndex}</strong>.`
    }
    
})

binIconButton.addEventListener('click', () => {
    searchSubstring.value = ''
    inputTextArea.value = ''
    paragraph1.textContent = ''
    paragraph2.textContent = ''
    caseInsensitiveCheckbox.checked = 'true'
})

caseInsensitiveCheckbox.addEventListener('change', () => {
    if (caseInsensitiveCheckbox.checked) {
        paragraph1.textContent = ''
        paragraph2.textContent = ''
        caseInsensitiveCheckbox.checked = 'true'
    } else {
        paragraph1.textContent = ''
        paragraph2.textContent = ''
        caseInsensitiveCheckbox.checked = 'false'
    }
})

