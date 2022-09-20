import { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import MensajesIngles from '../lang/en-US.json'
import MensajesEspañol from '../lang/es-ES.json'
import { ThemeContextProvider } from "./themeContext";

const langContext = createContext();

const LangProvider = ({children}) => {

    let localePorDefecto;
    let mensajesPorDefecto;

    const lang = localStorage.getItem('lang')

    if(lang){
        localePorDefecto = lang;
        if(lang === 'es-ES'){
            mensajesPorDefecto = MensajesEspañol;
        }else if(lang === 'en-US'){
            mensajesPorDefecto = MensajesIngles;
        }else{
            localePorDefecto = 'en-US'
            mensajesPorDefecto = MensajesIngles;
        }
    }else{
        localePorDefecto = 'en-US'
        mensajesPorDefecto = MensajesIngles
    }

    const [mensajes, setMensajes] = useState(mensajesPorDefecto);
    const [locale, setLocale] = useState(localePorDefecto);

    const establecerLenguaje = (lenguaje) => {
        console.log(lenguaje)
        switch (lenguaje){
            case 'es-ES':
                setMensajes(MensajesEspañol)
                setLocale('es-ES')
                localStorage.setItem('lang', 'es-ES')
                break;
            case 'en-US':
                setMensajes(MensajesIngles)
                setLocale('en-US')
                localStorage.setItem('lang', 'en-US')

                break;
            default:
                setMensajes(MensajesIngles)
                setLocale('en-US')
        }
    }

    return (
        <langContext.Provider value={{establecerLenguaje}}>
            <IntlProvider locale={locale} messages={mensajes}>
                <ThemeContextProvider>
                    {children}
                </ThemeContextProvider>
            </IntlProvider>
        </langContext.Provider>
    );
}

export {LangProvider, langContext}