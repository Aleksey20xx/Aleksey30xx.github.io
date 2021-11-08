document.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelectorAll('.body__item-prewie');
    let height = 0;

    for (let i = 0; i < box.length; i++) {
        let current__height = box[i].offsetHeight;
        if (current__height > height) {
            height = current__height;
        }    
    }
    for (let i = 0; i < box.length; i++) {
        box[i].style.height = height + 'px';   
    }

    const boxRow = document.querySelectorAll('.body__row-text');
    let heightRow = 0;

    for (let i = 0; i < boxRow.length; i++) {
        let current__heightRow = boxRow[i].offsetHeight;
        if (current__heightRow > heightRow) {
            heightRow = current__heightRow;
        }    
    }
    for (let i = 0; i < boxRow.length; i++) {
        boxRow[i].style.height = heightRow + 'px';   
    }

})