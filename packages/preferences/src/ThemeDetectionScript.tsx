const SCRIPT = `(function(){try{if(!document.cookie.match(/(?:^|;\\s*)theme=/)){document.documentElement.className=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}}catch(e){}})();`;

export const ThemeDetectionScript = () => <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
