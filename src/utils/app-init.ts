import {environment} from '../environments/environment';
import {KeycloakService} from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
 return (): Promise<any> => {
   return new Promise(async (resolve, reject) => {
     try {
       await keycloak.init({
         config: environment.keycloak,
         initOptions: {
           onLoad: 'check-sso',
           checkLoginIframe: false
         },
         enableBearerInterceptor: true,
         bearerPrefix: 'Bearer',
         bearerExcludedUrls: [
           'main.js',
         ]
       });
       resolve();
     } catch (error) {
       reject(error);
     }
   });
 };
}
