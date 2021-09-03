// кладем в переменную тип нашего action
export const CHANGE_AUTH_PAGE_CHOSEN_FORM = 'CHANGE_AUTH_PAGE_CHOSEN_FORM'
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const CHANGE_HEADER_BURGER_MENU = 'CHANGE_HEADER_BURGER_MENU'

// Функция, которая содержит в себе тип и статус нашего Sidebar
export function changeAuthPageChosenForm(status) {
    return {
        type: CHANGE_AUTH_PAGE_CHOSEN_FORM,
        status: status,
    }
}

// меняем язык приложения
export function changeLanguage(status) {
    return {
        type: CHANGE_LANGUAGE,
        status: status,
    }
}

// Открываем/закрываем меню навигации на маленьком экране в header
export function changeBurgerMenu(status) {
    return {
        type: CHANGE_HEADER_BURGER_MENU,
        status: status,
    }
}
