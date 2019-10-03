export default class InitService{
  constructor(props) {
    this.config = props.config;
  }
  
  getConfigElem(elem) {
    return (this.config.hasOwnProperty('elem')) ? this.config[elem] : null;
  }
}
