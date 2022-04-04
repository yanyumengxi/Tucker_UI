import TButton from "./TButton"
import TCard from "./TCard";

const components = [
    TButton,
    TCard
]

const install = function (app) {
    if (install.installed) return
    components.map(component => app.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    TButton,
    TCard
}
