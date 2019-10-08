import {EF} from 'ef';
export default class InitService {
  constructor(props) {
    this.config = props.config;
    this.api = EF.api;
  }
  
  getConfigElem(elem) {
    return (this.config.hasOwnProperty('elem')) ? this.config[elem] : null;
  }

  insertScript(path) {

    const script = document.createElement('script');
    script.src = path;
    script.async = false;
    return new Promise((resolve) => {
      script.onload = (e) => {
        path.event = e;
        document.body.appendChild(script);
      };
    });
  }

}
