export default () => {
    function HexaKeys(length) {
        let result = "";
        for (let index = 0; index < length; index++) {
            let aleatory = Math.floor(Math.random() * (15));
            result += aleatory.toString(16);
        }
        return result;
    }
    return HexaKeys(8) + "-" + HexaKeys(4) + "-" + HexaKeys(4) + "-" + HexaKeys(4) + HexaKeys(12);
}

