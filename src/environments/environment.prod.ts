// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl = 'https://video.fitnesstrainer.tube/';
const backendUrl = 'https://api.fitnesstrainer.tube/';
const loginUrl = 'https://fitnesstrainer.tube/login';
const logoutUrl = 'https://fitnesstrainer.tube/logout';



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.fitnesstrainer.tube',
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://facetime.tube/',
  logoutUrl: logoutUrl
};