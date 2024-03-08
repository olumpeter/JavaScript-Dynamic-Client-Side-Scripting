
const searchSubstring = document.querySelector('#search_substring')
const inputTextArea = document.querySelector('#input_text_area')
const caseInsensitiveCheckbox = document.querySelector('#case_insensitive_checkbox')
const countButton = document.querySelector('#count_button')
const binIconButton = document.querySelector('#bin_icon_button')
const outputs = document.querySelector('.outputs')
const paragraph1 = document.querySelector('#paragraph1') 
const paragraph2 = document.querySelector('#paragraph2') 

countButton.addEventListener('click', () => {
    count = 0
    for (let i = 0; i < inputTextArea.value.length; i++) {
        if (caseInsensitiveCheckbox.checked) {
            if (inputTextArea.value.slice(i, searchSubstring.value.length + i).toLowerCase() === searchSubstring.value.toLowerCase()) {
                count++
            }
        } else {
            if (inputTextArea.value.slice(i, searchSubstring.value.length + i) === searchSubstring.value) {
                count++
            }
        }
    }
    paragraph1.innerHTML = `The substring <strong>${searchSubstring.value}</strong> occurs <strong>${count}</strong> times.`
    paragraph2.innerHTML = `The substring <strong>${searchSubstring.value}</strong> occurs <strong>${count}</strong> times.`

})



// binIconButton.addEventListener('click', () => {
//     inputTextArea.value = ''
//     outputStringLengthParagraph.textContent = ''
//     isAutoCheckbox.checked = 'true'
// })

// isAutoCheckbox.addEventListener('change', () => {
//     if (isAutoCheckbox.checked) {
//         outputStringLengthParagraph.innerHTML = `Your string is <strong>${inputTextArea.value.length}</strong> characters long.`
//     } else {
//         outputStringLengthParagraph.innerHTML = ''
//     }
// })