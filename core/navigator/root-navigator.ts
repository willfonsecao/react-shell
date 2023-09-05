import { Route, createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
    if (navigationRef.isReady()) {
        (navigationRef.navigate as any)(name, params);
    }
}

export function getCurrentRoute(): Route<string> | undefined {
    if (navigationRef.isReady()) {
        return navigationRef.getCurrentRoute();
    }
    return undefined;
}