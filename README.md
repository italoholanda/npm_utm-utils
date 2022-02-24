# npm_utm-utils

*UTM Utils - A Simple Way to Handle Your UTM's*

## About the package:
This package consists of a JavaScript library to get and manipulate the UTM's in your Front-End Project. That's very useful when you want to track the traffic origin from your website.

## Wich UTM's this support?
- utm_source
- utm_id
- utm_campaign
- utm_source
- utm_term
- utm_medium

## Main features:
- use `updateLinkWithUtmParams(link)` to update a link with the UTM's from the actual URL or the stored UTM's (localStorage)
- use `getUtm()` to get a JavaScript Object with the UTM's from the actual URL or the stored UTM's (localStorage)

## Aux features:
- use `getParsedUtm(utmObject)` to get the UTM's formatted like a Query String
- use `getUrlUtm()` to get a JavaScript Object with the UTM's from your actual URL
- use `someUtmExists()` to verify if some UTM exists on your actual URL
- use `setLocalStorageUtm(utmObject)` to save an UTM object in the localStorage
- use `getLocalStorageUtm()` to get the UTM's saved in your localStorage
