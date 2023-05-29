const capitalizeFirst = (inputArray) => {
  const newArray = [];
  if (inputArray.length === 0) return newArray;

  let uppperCase;

  const first = (array) => {
    uppperCase = array[0][0].toUpperCase();
    return next(array.slice(1));
  };

  const next = (array) => {
    if (array.length === 0) return newArray.push(uppperCase);
    uppperCase += array[0];
    return next(array.slice(1));
  };

  first(inputArray[0]);
  return newArray.concat(capitalizeFirst(inputArray.slice(1)));
};

capitalizeFirst(["car", "taco", "banana"]);

function capitalizeFirst2(array) {
  // add whatever parameters you deem necessary - good luck!
  let newArray = [];
  let firstS = array[0][0].toUpperCase();
  let remainS = array[0].slice(1);
  newArray.push(firstS + remainS);
  newArray.concat(capitalizeFirst(array.slice(1)));

  return newArray;
}

function capitalizeFirst_solution(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst_solution(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}
//콜스택에는 array 3개 => 2개 => 1개
//["car", "taco", "banana"] res = ["Car", "Taco"]가 반환 인수 string "Banana"를 res에 넣고 반환
//["car", "taco"] res = ["Car"]가 반환 두번째 인수 string을 res에 넣고 반환 ["Car", "Taco"]
//["car"]일때 ["Car"]를 반환
//
//array가 세개 array가 두개 array가 한개일때 각각 뒤엣것을 uppercase작업하고 반환되는 res에 추가해주기
//반환될 때는 거꾸로 하기 때문에

//반환할 것은 res (완성된array)
//res를 완성시키려면 점차 넣는 작업이 필요
//length를 1까지 쪼개어 재귀 호출하고
//length가 1일때는 해당 글자를 return해주고
//그다음에는 뒤의 인수를 uppercase작업하고 넣어주고
//다 채웠으면 return
capitalizeFirst_solution(["car", "taco", "banana"]); // ['Car','Taco','Banana']
