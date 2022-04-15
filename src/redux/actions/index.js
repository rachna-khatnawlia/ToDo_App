import * as auth from "./auth";
import * as listActions from "./listActions";

//-------------------combining actions------------------------
export default {
    ...auth,
    ...listActions
}