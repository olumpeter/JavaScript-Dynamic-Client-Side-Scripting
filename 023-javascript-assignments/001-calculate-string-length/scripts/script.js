const inputTextArea = document.querySelector('#input_text_area')
const isAutoCheckbox = document.querySelector('#is_auto_checkbox')
const computeStringLengthButton = document.querySelector('#compute_string_length_button')
const binIconButton = document.querySelector('#bin_icon_button')
const outputStringLengthParagraph = document.querySelector('.output_string_length > p')


computeStringLengthButton.addEventListener('click', () => {
    outputStringLengthParagraph.innerHTML = `Your string is <strong>${inputTextArea.value.length}</strong> characters long.`
})

inputTextArea.addEventListener('keyup', () => {
    if (isAutoCheckbox.checked) {
        outputStringLengthParagraph.innerHTML = `Your string is <strong>${inputTextArea.value.length}</strong> characters long.`
    } else {
        outputStringLengthParagraph.innerHTML = ''
    }
})

binIconButton.addEventListener('click', () => {
    inputTextArea.value = ''
    outputStringLengthParagraph.textContent = ''
    isAutoCheckbox.checked = 'true'
})

isAutoCheckbox.addEventListener('change', () => {
    if (isAutoCheckbox.checked) {
        outputStringLengthParagraph.innerHTML = `Your string is <strong>${inputTextArea.value.length}</strong> characters long.`
    } else {
        outputStringLengthParagraph.innerHTML = ''
    }
})