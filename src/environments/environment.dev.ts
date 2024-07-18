// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl ='https://video.fitnesstrainer.tube/';
const backendUrl =  'https://api.fitnesstrainer.tube/';
const loginUrl = 'https://www.fitnesstrainer.tube/login';
const wasabiUrl = 'https://freedom-social.s3.us-east-1.wasabisys.com/';
const logoutUrl = 'https://www.fitnesstrainer.tube/logout';;



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.fitnesstrainer.tube',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://meet.facetime.tube/',
  logoutUrl: logoutUrl
};

