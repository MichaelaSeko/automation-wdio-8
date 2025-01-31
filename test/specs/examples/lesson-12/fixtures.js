import {username, password, userFullName} from '../../fixtures.js'

export function resolvePlaceholder(placeholderOrValue) {
    switch (placeholderOrValue) {
        case '@USERNAME@':
            return username;
        case '@PASSWORD@':
            return password;
        case '@ADMIN_USER@':
            return userFullName;
        default:
            return placeholderOrValue;
    }
}
