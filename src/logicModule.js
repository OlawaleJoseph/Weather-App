/* eslint-disable import/no-cycle, no-alert */
import ApiHandler from './api/apiHandler';
import eventListeners from './listenersModule';
import PageStructure from './pageStructure';

const container = document.querySelector('.container');

export default (() => {
  const appDefaultDatas = async () => {
    try {
      const datas = await ApiHandler.getDefaultWeather();
      const dom = PageStructure(datas);
      container.appendChild(dom.leftWrapper);
      container.appendChild(dom.rightWrapper);
      eventListeners.searchbutton();
      eventListeners.tempsButtons();
    } catch (error) {
      alert('We could not load the app, check your network');
    }
  };
  return { appDefaultDatas};
})();
