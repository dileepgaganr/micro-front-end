import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'


//Creates app in host shell start
export function createVueApp(el) {
    if (el) {
        const appInstance = createApp(App)
                            .use(router)
                            .use(createPinia());
        appInstance.mount(el);
        return appInstance;
    }
    else {
        console.error('Mount target element not found');
    }
}

export function destroy(vueInstance) {
    if (vueInstance && typeof vueInstance.unmount === 'function') {
        vueInstance.unmount();
    }
}

window.addEventListener('message', (e) => {
    if (e.data.type === 'vueNextRouteChange') {
        router.push(e.data.path);
    }
});

router.afterEach((to) => {
    window.parent.postMessage({ type: 'vueRouteChange', path: to.fullPath }, '*');
})
//Creates app in host shell end

//Main App creation runs here
if (typeof window !== 'undefined' && typeof document !== 'undefined' && document.getElementById('app')) {
    createVueApp('#app');
}
