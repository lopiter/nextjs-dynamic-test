import COMPONENTS from "./component_store"

export function DynamicComponentsLoader(template,name,mobile) {
    name = mobile ? `mobile/${name}` : `pc/${name}` 
    return COMPONENTS[template][name]
}