import {defineAsyncComponent} from 'vue';

export const setupCustom = (app: any) => {
    const modules = import.meta.glob("@/components/*/*.vue");
    for(const path in modules){
        const name = path.split('/').pop()?.split('.')[0]
        const Component: any = modules[path];
        app.component(`myh-${name}`,defineAsyncComponent(Component) )
    }
}