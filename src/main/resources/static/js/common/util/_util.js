
/**
 * Util
 * 공통 메서드
 */
class commonUtil{

    /**
     * 데이터리스트 컬럼 배열 가져오기
     * 해당컬럼의 모든 데이터를 배열로 리턴.
     * jsonArr : 데이터리스트
     * column : column ID
     */
    getColumnArray = (jsonArr, column) => {
        var array = [];
        if(Array.isArray(jsonArr) && jsonArr[0] && column){
            for(let json of jsonArr){
                array.push(json[column]);
            }
            return array;
        }else{
            return array;
        }
    }

    /**
     * 데이터리스트 컬럼 데이터 가져오기
     * 해당컬럼의 데이터가 동일한것만 jsonArr 리턴.
     * jsonArr : 데이터리스트
     * column : column ID
     */
    getMatchedJSON = (jsonArr, column, data) => {
        let array = [];
        if(Array.isArray(jsonArr) && jsonArr[0] && column && data){
            for(let menu of menuList){
                if(menu[column] === data) array.push(menu);
            }
            return array;
        }else{
            return array;
        }
    }
}