import {KeycloakConfig} from 'keycloak-angular';

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'TPWS',
  clientId: 'angular',
}

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
