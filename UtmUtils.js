"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalStorageUtm = getLocalStorageUtm;
exports.getParsedUtm = getParsedUtm;
exports.getUrlUtm = getUrlUtm;
exports.getUtm = getUtm;
exports.setLocalStorageUtm = setLocalStorageUtm;
exports.someUtmExists = someUtmExists;
exports.updateLinkWithUtmParams = updateLinkWithUtmParams;

/*
    Aux functions
*/
function getLocalStorageUtm() {
  return JSON.parse(localStorage.getItem('utm'));
}

function setLocalStorageUtm(utmObject) {
  localStorage.setItem('utm', JSON.stringify(utmObject));
}

function someUtmExists(utmObject) {
  for (let utm in utmObject) if (utmObject[utm]) return true;

  return false;
}

function getUrlUtm() {
  const query = new URLSearchParams(window.location.search);
  const utmObject = {
    utmCampaign: query.get("utm_campaign"),
    utmSource: query.get("utm_source"),
    utmMedium: query.get("utm_medium"),
    utmContent: query.get("utm_content"),
    utmTerm: query.get("utm_term"),
    utmId: query.get("utm_id")
  };
  return utmObject;
}

function getParsedUtm(utmObject) {
  const campaign = utmObject !== null && utmObject !== void 0 && utmObject.utmCampaign ? `utm_campaign=${utmObject.utmCampaign}&` : '';
  const source = utmObject !== null && utmObject !== void 0 && utmObject.utmSource ? `utm_source=${utmObject.utmSource}&` : '';
  const medium = utmObject !== null && utmObject !== void 0 && utmObject.utmMedium ? `utm_medium=${utmObject.utmMedium}&` : '';
  const content = utmObject !== null && utmObject !== void 0 && utmObject.utmContent ? `utm_content=${utmObject.utmContent}&` : '';
  const term = utmObject !== null && utmObject !== void 0 && utmObject.utmTerm ? `utm_term=${utmObject.utmTerm}&` : '';
  const id = utmObject !== null && utmObject !== void 0 && utmObject.utmId ? `utm_id=${utmObject.utmId}&` : '';
  let params = `${source}${medium}${content}${term}${campaign}${id}`;
  if (params[params.length - 1] === '&') params = params.slice(0, -1);
  return params;
}

/*
    Main functions
*/
function getUtm() {
  const urlUtm = getUrlUtm();
  if (someUtmExists(urlUtm)) setLocalStorageUtm(urlUtm);
  return getLocalStorageUtm();
}

function updateLinkWithUtmParams(url) {
  const params = getParsedUtm(getUtm());

  if (params) {
    return url.includes('?') ? url + '&' + params : url + '?' + params;
  }

  return url;
}
