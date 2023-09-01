let sortByView = false

const styleSortByViewButton = () => {
    const sortByViewButtton = document.getElementById('sort-by-view-button')
    
    const grayStyle = ['text-dark25', 'bg-gray3720'];
    const redStyle = ['text-white', 'bg-red3d'];
    
    if(sortByView) {
        sortByViewButtton.classList.remove(...grayStyle)
        sortByViewButtton.classList.add(...redStyle)
    } else {
        sortByViewButtton.classList.remove(...redStyle)
        sortByViewButtton.classList.add(...grayStyle)
    }
}

const sortByViewHandler = () => {
    sortByView = !sortByView
    styleSortByViewButton()
}