import {component$, useStyles$, useContext} from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import globalStyles from './global.scss?inline';
import { TabsContext } from "library";

export default component$(() => {
  // const tabState = useContext(TabsContext);
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);


  return (
    <QwikCityProvider>
      <head>
        <title>Test Library</title>
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" className="style-manager-theme"
        href='/css/bootstrap-5.2.3/css/bootstrap.min.css'/>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
