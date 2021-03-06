import authSaga from './auth';
import linkJoinCreateSaga from './link-join-create';
import { checkPlaybackSdkCompatibility as compatibilitySaga } from './local-player';
import metadataSaga from './metadata';
import partyDataSaga from './party-data';
import toastSaga from './toast';
import searchSaga from './view-party-search';

import viewHomeSaga from './view-home';
import viewSettingsSaga from './view-party-settings';
import viewShareSaga from './view-party-share';

export default [
    authSaga,
    compatibilitySaga,
    linkJoinCreateSaga,
    metadataSaga,
    partyDataSaga,
    searchSaga,
    toastSaga,

    viewHomeSaga,
    viewSettingsSaga,
    viewShareSaga,
];
