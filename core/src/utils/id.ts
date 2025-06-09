import {v4 as uuid} from "uuid";

class Id {
    static novoId() {
        return uuid();
    }
}


export default Id