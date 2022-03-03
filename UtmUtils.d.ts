interface UtmInterface {
    utmCampaign: string | null;
    utmSource: string | null;
    utmMedium: string | null;
    utmContent: string | null;
    utmTerm: string | null;
    utmId: string | null
}

declare function getLocalStorageUtm() : UtmInterface;
declare function setLocalStorageUtm() : void;
declare function someUtmExists(utmObject: UtmInterface) : boolean;
declare function getUrlUtm(): UtmInterface;
declare function getParsedUtm(utmObject: UtmInterface) : string;
declare function getUrl(): UtmInterface;
declare function updateLinkWithUtmParams(url: string): string;

export = {
    getLocalStorageUtm,
    setLocalStorageUtm,
    someUtmExists,
    getUrlUtm,
    getParsedUtm,
    getUrl,
    updateLinkWithUtmParams
}
