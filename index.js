let sortByView = false
let lastSelectedCategoryId

const styleSortByViewButton = () => {
    const sortByViewButtton = document.getElementById('sort-by-view-button')
    
    const grayStyle = ['text-dark25', 'bg-gray3720', 'font-medium'];
    const redStyle = ['text-white', 'bg-red3d', 'font-semibold'];
    
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

const categoryHandler = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const json = await response.json()
    const categoryDatas = json.data;
    
    const categoryButtonsContainer = document.getElementById('category-buttons-container');
    const categoryButtons = categoryDatas.map(categoryData => `<button id="${categoryData.category_id}" class="text-lg font-medium rounded-[4px] px-5 py-[8px] duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-[-2px] active:shadow-sm text-3770 bg-gray3715" onclick="selectCategory('${categoryData.category_id}')">${categoryData.category}</button>`);
    categoryButtonsContainer.innerHTML = categoryButtons.join('')

    return categoryDatas[0].category_id
}

const selectCategory = categoryId => {
    if(categoryId === lastSelectedCategoryId) {
        return
    }

    const grayStyle = ['text-3770', 'bg-gray3715', 'font-medium'];
    const redStyle = ['text-white', 'bg-red3d', 'font-semibold'];

    if(lastSelectedCategoryId) {
        const lastSelectedCategoryButton = document.getElementById(lastSelectedCategoryId)
        lastSelectedCategoryButton.classList.remove(...redStyle)
        lastSelectedCategoryButton.classList.add(...grayStyle)
    }

    const selectedCategoryButton = document.getElementById(categoryId)
    selectedCategoryButton.classList.remove(...grayStyle)
    selectedCategoryButton.classList.add(...redStyle)

    lastSelectedCategoryId = categoryId
}

const main = async () => {
    const categoryToBeSelected = await categoryHandler()
    selectCategory(categoryToBeSelected)
}

main()