
/**
 * Util
 * 공통 메서드
 */
class commonUtil {

    /**
     * 데이터리스트 컬럼 배열 가져오기
     * 해당컬럼의 모든 데이터를 배열로 리턴.
     * jsonArr : 데이터리스트
     * column : column ID
     */
    getColumnArray = (jsonArr, column) => {
        var array = [];
        if (Array.isArray(jsonArr) && column) {
            for (let json of jsonArr) {
                array.push(json[column]);
            }
            return array;
        } else {
            return array;
        }
    }

    /**
     * 데이터리스트 컬럼 데이터 가져오기
     * 해당컬럼의 데이터가 동일한것만 jsonArr 리턴.
     * jsonArr : 데이터리스트
     * column : column ID
     * data   : 데이터 값
     */
    getMatchedJSON = (jsonArr, column, data) => {
        let array = [];
        if (Array.isArray(jsonArr) && column && data) {
            for (let json of jsonArr) {
                if (json[column] === data) array.push(json);
            }
            return array;
        } else {
            return array;
        }
    }

    /**
     * 데이터리스트 컬럼 추가
     * 추가할 json을 넘기면 컬럼을 추가한다.
     * jsonArr : 데이터리스트
     * json : 추가할 컬럼
     */
    insertColumn = (jsonArr, json) => {
        if (Array.isArray(jsonArr) && json) {
            for (let i = 0; i < jsonArr.length; i++) {
                for (let column in json) {
                    jsonArr[i][column] = json[column];
                }
            }
            return jsonArr;
        } else {
            return jsonArr;
        }
    }
}

const CommonUtil = new commonUtil();