/**
 * Basic cookies utils wrapper
 */

const Cookies = {
    getAllCookies: function(){
        return document.cookie.split(';');
    },

    getCookie: function(cookieName, currentIndex = 0){
        const currentCookie = Cookies.getAllCookies()[currentIndex].split('=')
        const currentCookieName = currentCookie[0].trim();
        const currentCookieValue = currentCookie[1].trim();
    
        if(currentCookieName == cookieName.trim()){
            return {
                name: currentCookieName,
                value: currentCookieValue,
                exists: true
            };
        } else if(currentIndex < Cookies.getAllCookies().length-1){
            return Cookies.getCookie(cookieName, currentIndex+1)
        } else {
            return {
                exists: false
            }
        }
    },
    deleteCookie: function(cookieName, path = '/'){
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
    },
    createCookie: function(config){
        const {cookieName, value, expiration, path} = config;
        if(!cookieName){
            console.error('you need provide at least cookie name')
            throw 'cookieName not defined!'
        }
        document.cookie = `${cookieName}=${!!value ? value : ''} ${!!expiration ? '; expires ='+ expiration + 'UTC' : ''} ${!!path ? '; path='+path:''}`
    },
    updateCookie: function(config){
        Cookies.createCookie(config);
    }

};




